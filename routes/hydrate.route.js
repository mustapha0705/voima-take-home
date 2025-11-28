import express from "express";
import { getInsight, createHydration } from "../controllers/hydrate.controller.js";

const router = express.Router();

router.post("/", createHydration);
router.get("/insight", getInsight);

export default router;
