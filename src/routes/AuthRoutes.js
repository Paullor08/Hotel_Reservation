import { registerUser ,loginUser } from "../controller/AuthController.js";
import express from 'express';

const router = express.Router();
const AuthRouter = router

router.post('/register' ,registerUser);
router.post('/login' ,loginUser);

export default AuthRouter;