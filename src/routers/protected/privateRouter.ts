import type {Request, Response, Router} from 'express';

export const privateRoute = (router: Router) => {
    router
        .get('/', (req: Request, res: Response) => {
            res.send('Private route')
        })
}