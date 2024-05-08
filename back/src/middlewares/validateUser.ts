import { Request, Response, NextFunction } from "express";
import { UserDto } from "../dtos/UserDto";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, dateOfBirth, identityNumber, username, password }: UserDto = req.body;
        if (!name) throw new Error("Missing field: name")
        if (!email) throw new Error("Missing field: email")
        if (!dateOfBirth) throw new Error("Missing field: dateOfBirth")
        if (!identityNumber) throw new Error("Missing field: identityNumber")
        if (!username) throw new Error("Missing field: username")
        if (!password) throw new Error("Missing field: password")
        next();
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};