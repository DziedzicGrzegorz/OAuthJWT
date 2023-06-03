import { NextFunction, Request, Response } from "express";
export declare class ValidationError extends Error {
}
export declare const handleError: (err: unknown, req: Request, res: Response, next: NextFunction) => void;
