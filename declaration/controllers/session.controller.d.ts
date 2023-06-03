import type { Request, Response } from 'express';
export declare function startSession(req: Request, res: Response): Promise<void>;
export declare function getSessionHandler(req: Request, res: Response): void;
export declare function deleteSessionHandler(req: Request, res: Response): void;
export declare function registration(req: Request, res: Response): Promise<void>;
