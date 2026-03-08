// express related
import express from "express";
const app = express();

// middlewares related
app.use(express.json());

// routes related
import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);

export default app;
