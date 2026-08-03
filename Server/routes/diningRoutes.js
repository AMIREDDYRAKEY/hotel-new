import express from "express";
import { getDinings, addDining, updateDining, deleteDining } from "../controllers/diningController.js";

const router = express.Router();

router.get("/", getDinings);
router.post("/", addDining);
router.put("/:id", updateDining);
router.delete("/:id", deleteDining);

export default router;
