import { Router, IRouter } from "express";

import users from "./users";

const router: IRouter = Router();

router.use("/users", users);

export default router;

