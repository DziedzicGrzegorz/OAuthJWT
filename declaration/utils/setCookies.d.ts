import { Response } from 'express';
export declare const acccesTokenMaxAge: number;
export declare const refreshTokenMaxAge: number;
export declare function setCookies(res: Response, accessToken: string, refreshToken: string, accessTokenMaxAge: number, refreshTokenMaxAge: number): void;
