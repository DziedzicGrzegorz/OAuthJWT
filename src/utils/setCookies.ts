import {Response} from 'express';

export const acccesTokenMaxAge = 60 * 1000; // 1 minute
export const refreshTokenMaxAge = 1000 * 60 * 60 * 24 * 365; // 1 year
export function setCookies(res: Response, accessToken: string, refreshToken: string, accessTokenMaxAge: number, refreshTokenMaxAge: number): void {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: accessTokenMaxAge
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: refreshTokenMaxAge
    });
}

