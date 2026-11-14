import express from "express";
import { obtenerEstado } from "../controllers/healthController.js";

const router = express.Router();

router.get("/", obtenerEstado);

export default router;
