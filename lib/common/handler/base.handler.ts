import type { IronSession } from "iron-session";
import type { EventHandlerRequest, H3Event } from "h3";
import { Logger } from "~/lib/common/log/logger";
import { BaseException } from "~/lib/common/exception/base.exception";
import {
  UnauthorizedException,
} from "@/lib/common/exception/unauthorized.exception";

/**
 * Base class for handlers
 */
export abstract class BaseHandler {
  private readonly baseLogger: Logger;

  protected constructor(protected event: H3Event<EventHandlerRequest) {
    this.baseLogger = new Logger("BaseHandler");
  }

  /**
   * Validates user session
   * @param options If validate option is true, validates session, otherwise returns session without validation. Default: false
   */
  protected async getSession(options = { validate: false }): Promise<IronSession<SessionData>> {
    const session = await useSession<SessionData>(this.event, {
      password: "xyz"
    });

    if (options.validate && !session.isLoggedIn) {
      throw new UnauthorizedException("Guest not logged in");
    }

    return session;
  }

  /**
   * Parses input data, calls handler function and finally builds response data
   * @param handler Handler function
   * @param options Options to be passed to handler function. Default: { session: false }.
   * If the session option is set to true, the handler function will be called only if the user is logged in.
   * @returns Handler function result accordingly adapted to caller type
   */
  protected async handleRequest<T>(
    handler: (args: {
      body: any;
      query: any;
      session: IronSession<SessionData>
    }) => Promise<T>,
    options?: { session?: boolean },
  ) {
    try {
      const body = await readBody(this.event);
      const query = getQuery(this.event);

      const session = await this.getSession({ validate: options?.session ?? false });
      const data = await handler({ body, query, session });

      return data ?? { message: "Ok" };
    } catch (exception) {
      const response = BaseException.getApiResponse(exception);

      if (exception instanceof Error && response.statusCode >= 500) {
        this.baseLogger
          .level("error")
          .category("BaseHandler::error")
          .description(exception.message)
          .add("statusCode", response.statusCode)
          .add("errorName", exception.name)
          .add("stack", exception.stack)
          .flush();
      }

      this.baseLogger
        .level("error")
        .category("BaseHandler::error")
        .description(response.error.message)
        .add("statusCode", response.statusCode)
        .add("stack", response.error.errors)
        .flush();

      throw createError({
        statusCode: response.statusCode,
        statusMessage: response.error,
      });
    }
  }
}
