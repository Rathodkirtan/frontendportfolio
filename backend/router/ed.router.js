import express from 'express';
import {userDelete,franciseDelete,contactDelete,franchiseUpdate,contactUpdate,userUpdate} from '../controllers/ed-controller.js';

const router=express.Router();

router.route('/api/userdelete/:id').get(userDelete);
router.route('/api/francisedelete/:id').get(franciseDelete);
router.route('/api/contactdelete/:id').get(contactDelete);

router.route('/api/franchiseupdate').post(franchiseUpdate);
router.route('/api/contactupdate').post(contactUpdate);
router.route('/api/userupdate').post(userUpdate);
export default router;