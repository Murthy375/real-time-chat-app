// express related
import express from "express";
const app = express();

// routes related
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

// cookie-parser related
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;
