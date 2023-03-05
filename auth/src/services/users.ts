import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { User } from "../models/User";

export const register = async (email: string, password: string): Promise<string> => {
    try {
        if (!email || !password) {
            throw new Error("Please provide an email and password.");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hashedPassword });

        await user.save();

        return jwt.sign({ email }, "secret", { expiresIn: "1h" });
    } catch (err) {
        console.error(err);
        throw new Error("Please enter required data correctly.");
    }
};

export const login = async (email: string, password: string): Promise<string> => {
    try {
        if (!email || !password) {
            throw new Error("Please provide an email and password.");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid credentials.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid credentials.");
        }

        return jwt.sign({ email }, "secret", { expiresIn: "1h" });
    } catch (err) {
        console.error(err);
        throw new Error("Please enter required data correctly.");
    }
};

export const validate = async (JWT: string): Promise<string | JwtPayload> => {
    try {
        return jwt.verify(JWT, "secret");
    } catch (err) {
        console.error(err);
        throw new Error("Not authorized.");
    }
};

