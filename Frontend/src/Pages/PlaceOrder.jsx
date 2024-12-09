import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

function PlaceOrder() {

    const [payMethod, setPayMethod] = useState('COD');  // Initial state is 'COD'
    const { navigate, getCartAmount } = useContext(ShopContext)

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
            {/* Left side of Page */}
            <div className="flex flex-col gap-4  w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="E-mail address" />
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Pincode" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
            </div>

            {/* Right side of page */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="m-12">
                    <Title text1={"PAYMENT"} text2={"METHOD"} />
                    {/* Payment Method Selection */}
                    <div className="flex gap-3 flex-col lg:flex-row">
                        {/* Stripe Option */}
                        <div onClick={() => setPayMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${payMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
                        </div>
                        {/* Razorpay Option */}
                        <div onClick={() => setPayMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${payMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
                        </div>
                        {/* COD Option */}
                        <div onClick={() => setPayMethod('COD')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${payMethod === 'COD' ? 'bg-green-400' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8 ">
                        <button onClick={() => getCartAmount() > 0 ? navigate('/orders') : toast.error("Cart is Empty .Add Items to cart")} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
