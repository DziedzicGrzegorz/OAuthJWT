import { NextFunction, Request, Response } from 'express';
export declare function requireUser(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
