export type BaseExceptionError = {
  status: "error";
  statusCode: number;
  error: {
    message: string;
    errors?: unknown;
  };
};

/**
 * Base exception class. It contains helper methods and/or should be inherited in other exceptions
 */
export class BaseException extends Error {
  /**
   * Create a new Base API Exception
   * @param statusCode HTTP status code that will be returned in API calls
   * @param errorMessage Error message
   * @param errors Error cause/stack
   */
  constructor(
    private statusCode: number,
    private errorMessage: string,
    private errors?: unknown,
  ) {
    super(errorMessage, {
      cause: errors,
    });
  }

  /**
   * Builds an BaseExceptionError
   * @returns An instance of BaseExceptionError containing information provided during instantiation
   */
  public apiResponse(): BaseExceptionError {
    return {
      status: "error",
      statusCode: this.statusCode,
      error: {
        message: this.errorMessage,
        errors: this.errors,
      },
    };
  }

  /**
   * Builds an BaseExceptionError based on any exception type
   * @param except Any exception
   * @returns An instance of BaseExceptionError containing whatever information could be retrieved from Error instance
   */
  public static getApiResponse(except: any): BaseExceptionError {
    if (except instanceof BaseException) {
      return except.apiResponse();
    }

    return {
      status: "error",
      statusCode: 500,
      error: {
        message: except.message,
        errors: except.stack,
      },
    };
  }
}
