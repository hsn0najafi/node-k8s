import { Router, IRouter } from "express";

import api from "./api";

const router: IRouter = Router();

router.use("/api", api);

export default router;

