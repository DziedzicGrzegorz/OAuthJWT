import {getSession} from '../db/allUser';
import {signJWT, verifyJWT} from '../utils/jwt.utils';
import {type NextFunction, type Request, type Response} from 'express';

export function deserializeUser(req: Request, res: Response, next: NextFunction): void {
    const {accessToken, refreshToken} = req.cookies;

    if (!accessToken) {
        return next();
    }

    const {payload, expired} = verifyJWT(accessToken);


    if (payload) {
        req.user = payload;
        return next();
    }

    // expired but valid access token

    const {payload: refresh} =
        expired && refreshToken ? verifyJWT(refreshToken) : {payload: null};

    if (!refresh) {
        return next();
    }
    const session = getSession(refresh.sessionId);

    if (!session) {
        return next();
    }

    const newAccessToken = signJWT(session, '5s');


    res.cookie('accessToken', newAccessToken, {
        maxAge: 1000 * 60 * 60, // 1 hour
        httpOnly: true,
    });
    req.user = verifyJWT(newAccessToken).payload;

    return next();
}

