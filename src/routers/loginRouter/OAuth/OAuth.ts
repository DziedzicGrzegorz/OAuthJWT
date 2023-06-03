import type {Router} from 'express';
import {
    registrationOAuth,
    startOAuthSession,
    toLoginOAuth,
    tosingUpOAuth
} from '../../../controllers/session.OAuth.controller';

export const OAuthRoutes = (router: Router) => {
    router
        .get('/loginOAuth', toLoginOAuth)
        .get('/singupOAuth', tosingUpOAuth)

        .get('/loginGoogleOAuth', startOAuthSession)
        .get('/singupGoogleOAuth', registrationOAuth)
}

