import { Order } from '../models/order.models.js'
import { User } from '../models/user.models.js'


// Place order using COD method 
const placeOrderCod = async (req, res) => {

    try {

        // Destructure the necessary fields from the request body
        const { userId, items, amount, address } = req.body

        // Validate the required fields
        if (!userId || !items || !amount || !address) {
            return res.status(400).json({ message: "Missing Fields Required" });
        }

        // Validate the required fields
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: new Date()
        }

        // Create a instance of Order and save the new order
        const newOrder = new Order(orderData);
        await newOrder.save();

        // To clear cart data of this user , cartData will be reset and empty
        await User.findByIdAndUpdate(userId, { cartData: {} });

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: newOrder
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: message.error || 'Server error. Could not place order.'
        });

    }

}

//Place order using Stripe
const placeOrderStripe = async (req, res) => {

}


// Place order RazorPay 
const placeOrderRazorPay = async (req, res) => {

}


// All orders data for Admin Panel 
const allOrders = async (req, res) => {
    try {

        const orders = await Order.find({});
        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: message.error || 'Server error. Could not display all orders on admin panel.'
        });
    }
}

// User Order data for Frontend 
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body;

        const orders = await Order.find({ userId });

        if (orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No orders found for this user.'
            });
        }

        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: message.error || 'Server error. Could not display order details.'
        });
    }
}

// Update order status from Admin Panel
const updateOrderStatus = async (req, res) => {
    try {

        const { orderId, status } = req.body

        await Order.findByIdAndUpdate(orderId, { status })

        res.json({
            success: true,
            message: "Status Updated"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: message.error
        });
    }
}


export {
    placeOrderCod,
    placeOrderRazorPay,
    placeOrderStripe,
    allOrders,
    userOrders,
    updateOrderStatus
}