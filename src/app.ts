import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { TimeService } from "./time-service.js";
import { Routes } from "./routes.js"

const routes = new Routes(new TimeService());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../.env");

dotenv.config({ path: envPath });

const PORT = Number(process.env.PORT)
const app = express();

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/api", routes.doGetTime)

app.listen(PORT, () => {
    console.log(`Welcome! Server running on port ${PORT}`)
})