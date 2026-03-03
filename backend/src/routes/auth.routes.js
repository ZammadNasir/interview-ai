import {Router} from 'express';
import { loginUserController, registerUserController } from '../controllers/auth.controller.js';

const authRouter = Router();


/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register', registerUserController)

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post('/login', loginUserController)


export default authRouter;