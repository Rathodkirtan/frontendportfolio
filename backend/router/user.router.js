import express from 'express'
import {register,login,logout,adminlogin} from "../controllers/user.controllers.js";

const router=express.Router();

router.route('/reg').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/adminlogin').post(adminlogin);

export default router;