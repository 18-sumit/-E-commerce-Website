import express, { Router } from 'express'
import { placeOrderCod, placeOrderRazorPay, placeOrderStripe, allOrders, userOrders, updateOrderStatus } from '../controllers/order.controller.js'
import adminAuth from '../middleware/adminAuth.middleware.js'
import authUser from '../middleware/authUser.middleware.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/update-order-status', adminAuth, updateOrderStatus)


//Payment Features
orderRouter.post('/cod', authUser, placeOrderCod);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorPay);

// User Features 
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter