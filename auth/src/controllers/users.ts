import { Request, Response } from "express";

import * as usersService from "../services/users";

export const register = async (req: Request, res: Response) => {
    try {
        const data = await usersService.register(req.body.email, req.body.password);
        return res.status(200).json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return res.status(400).json({
            error: {
                message: err.message || "Please enter required data correctly."
            }
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const data = await usersService.login(req.body.email, req.body.password);
        return res.status(200).json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return res.status(400).json({
            error: {
                message: err.message || "Please enter required data correctly."
            }
        });
    }
};

export const validate = async (req: Request, res: Response) => {
    try {
        const JWT = req.headers.authorization?.split(" ")[1] as string;
        const data = await usersService.validate(JWT);
        return res.status(200).json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return res.status(400).json({
            error: {
                message: err.message || "Not authorized."
            }
        });
    }
};

