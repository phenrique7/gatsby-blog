import { db } from "~/lib/config/db";

export function generateSessionToken(): string {
	// TODO
}

export function createSession(token: string, userId: number): Session {
	// TODO
}

export function validateSessionToken(token: string): SessionValidationResult {
	// TODO
}

export function invalidateSession(sessionId: string): void {
	// TODO
}

export async function invalidateAllSessions(userId: number): Promise<void> {
	// TODO
}

export type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null };

export interface Session {
	id: string;
	guestId: number;
	expiresAt: Date;
}

export interface User {
	id: number;
}
