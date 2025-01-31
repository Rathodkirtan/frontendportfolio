import express from 'express'
import {sendotp,verifyotp} from '../controllers/otp-controller.js';
const router=express.Router();

router.route('/sendotp').post(sendotp)
router.route('/verifyotp').post(verifyotp)

export default router;