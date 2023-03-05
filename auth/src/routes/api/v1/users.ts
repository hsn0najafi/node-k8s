import { Router, IRouter } from "express";

import * as usersController from "../../../controllers/users";

const router: IRouter = Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/validate", usersController.validate);

export default router;

