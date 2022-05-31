import express from "express";
import { createPosts, getPosts, deletePost, updatePost} from "../controllers/postControllers.js";

const router = express.Router();


router.get("/", getPosts)
router.post("/", createPosts )
router.delete ("/:id", deletePost)
router.put ("/:id", updatePost)

export default router;