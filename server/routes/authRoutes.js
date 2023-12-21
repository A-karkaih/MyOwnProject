import express from 'express';
import { Login , Register , GoogleAuth , SignOut} from '../controllers/authController.js';
const router = express.Router();

router.post('/login', Login);
router.post('/register', Register);
router.post('/google', GoogleAuth);

router.post('/signout', SignOut);

export default router ;