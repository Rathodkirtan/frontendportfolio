import express from 'express'
import {orderController,fetchorder,addDate,orderapi} from '../controllers/order-controller.js';
import islogin from '../middleware/islogin.js';
import Adminislogin from '../middleware/Adminislogin.js';

const router=express.Router();

router.route("/api/order").post(islogin,orderController)
router.route("/api/fetchorder").get(Adminislogin,fetchorder)
router.route("/api/adddate").post(addDate)
router.route("/api/customerorder").get(islogin,orderapi)


export default router;