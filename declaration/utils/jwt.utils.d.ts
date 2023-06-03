import type { DecodedPayload, User, UserPayload } from "../types/user";
export declare function signJWT(payload: Object, expiresIn: string | number): string;
export declare function verifyJWT(token: string): {
    payload: DecodedPayload | UserPayload;
    expired: boolean;
} | {
    payload: null;
    expired: boolean;
};
export declare function createAndSign(user: Pick<User, "name" | "email">): {
    session: import("../types/user").UserSession;
    accessToken: string;
    refreshToken: string;
};
