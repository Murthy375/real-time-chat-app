// express related
import express from "express";
const app = express();

// routes related
import authRoutes from "./routes/auth.routes.js";

app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
