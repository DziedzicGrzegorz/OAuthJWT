import { Request } from "express";
import type { afterOAuth, GoogleUser } from "../types/user";
export declare function getGoogleAuthUrl(path: afterOAuth): string;
export declare function getGoogleData(req: Request, path: afterOAuth): Promise<GoogleUser>;
