import express, {
  type Express,
  type Request,
  type Response,
} from "express";

const app: Express = express();
const router = express.Router();

router.get("/hello", (req, res) => {
  console.log("coming request");
  res.json({instanceId: process.env.INSTANCE_ID, message: "Hello from Express!"});
});

export default router;
