import type { User, UserSession } from '../types/user';
export declare const sessions: Record<string, UserSession>;
export declare function getSession(sessionId: string): UserSession | null;
export declare function invalidateSession(sessionId: string): UserSession;
export declare function createSession(email: string, name: string): UserSession;
export declare function getUserByEmail(email: string): User | undefined;
export declare function createUser({ email, password, name, Auth }: User): User;
