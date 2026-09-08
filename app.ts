import express, {
  Router,
  type Express,
  type Request,
  type Response,
} from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.ts";

const app: Express = express();

// // Get __filename and __dirname in ES Module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from public folder
// app.use(express.static(path.join(__dirname, "public")));

// Home route
// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/", (req: Request, res: Response) => {
//   console.log("coming request");
//   res.json({instanceId: process.env.INSTANCE_ID, message: "Hello from Express!"});
// });

app.use("/api", routes);

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});