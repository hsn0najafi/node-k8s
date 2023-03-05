import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import "dotenv/config";

import { databaseConnection } from "./config/db";
import apiRoutes from "./routes";

const app: Application = express();

(async () => {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.json({ limit: "300kb" }));
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan("common"));

    await databaseConnection();

    app.use(apiRoutes);

    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server is running on 127.0.0.1:${PORT}`));
})();

export default app;

