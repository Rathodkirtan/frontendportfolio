import express from  'express'
import {Admincontact,Adminfranchise,Adminuser,Adminprofile} from '../controllers/Admincontact-controller.js'
import Adminislogin from '../middleware/Adminislogin.js';

const router=express.Router();

router.route('/admin/contact').get(Adminislogin,Admincontact)
router.route('/admin/franchise').get(Adminislogin,Adminfranchise)
router.route('/admin/user').get(Adminislogin,Adminuser)
router.route('/admin/adminprofile').get(Adminislogin,Adminprofile)
router.route('/admin/userfetch').get(Adminuser)


export default router;