import express from 'express';
import francise from '../controllers/francise.controllers.js';

const router=express.Router();

router.route('/francise').post(francise);

export default router;