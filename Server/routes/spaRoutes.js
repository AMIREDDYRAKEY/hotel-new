import express from "express";
import { getSpas, addSpa, updateSpa, deleteSpa } from "../controllers/spaController.js";

const router = express.Router();

router.get("/", getSpas);
router.post("/", addSpa);
router.put("/:id", updateSpa);
router.delete("/:id", deleteSpa);

export default router;
