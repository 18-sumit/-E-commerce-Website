import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'Order Placed',
            enum: ['Order Placed', 'Shipped', 'Delivered', 'Cancelled']
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        payment: {
            type: Boolean,
            required: true,
            default: false
        },
        date: {
            type: Date,
            required: true
        }

    },
    {
        timestamps: true
    })

export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)