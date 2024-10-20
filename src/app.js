// Express conf
import express from "express";
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

// Middlewares
app.use(express.json()); // for parsing application/json

app.use(projectRoutes);
app.use(taskRoutes);

export default app;
