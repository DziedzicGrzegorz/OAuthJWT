import type { Request, Response } from 'express';
export declare function startOAuthSession(req: Request, res: Response): Promise<void>;
export declare function registrationOAuth(req: Request, res: Response): Promise<void>;
export declare function toLoginOAuth(req: Request, res: Response): void;
export declare function tosingUpOAuth(req: Request, res: Response): void;
