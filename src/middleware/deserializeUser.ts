import {getSession} from '../db/allUser';
import {signJWT, verifyJWT} from '../utils/jwt.utils';
import {type NextFunction, type Request, type Response} from 'express';
import {DecodedPayload, UserPayload} from "../types/user";

export function deserializeUser(req: Request, res: Response, next: NextFunction): void {
    const {accessToken, refreshToken} = req.cookies;

    if (!accessToken) {
        return next();
    }

    const {payload, expired} = verifyJWT(accessToken) as { payload: UserPayload, expired: boolean };


    if (payload) {
        req.user = payload;
        return next();
    }

    // expired but valid access token

    const {payload: refresh} =
        expired && refreshToken ? verifyJWT(refreshToken) : {payload: null} as { payload: DecodedPayload } | { payload: null };

    if (!refresh) {
        return next();
    }
    const session = getSession(refresh.sessionId);

    if (!session) {
        return next();
    }

    const newAccessToken = signJWT(session, '5s');


    res.cookie('accessToken', newAccessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,// 1 week
        httpOnly: true,
    });
    req.user = verifyJWT(newAccessToken).payload;

    return next();
}

