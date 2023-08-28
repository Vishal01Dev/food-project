import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCart } from '../../redux/slices/cartSlice';

const Success = ({ setOrderState, order , URL }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { customerDetails } = order


    function orderFinished() {

        
        setOrderState(1);

        navigate(URL+'/home');
    }


    return (

        <div className="mb-10 sm:mb-0 xl:px-20 md:px-5">
            <div className="bg-white sm:p-6 md:p-8">
                <div>
                    <div className="grid md:grid-cols-2">
                        <div>
                            <h1 className="text-xl sm:text-3xl font-semibold py-1 text-prime">
                                Your order confirmed!
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500">
                                Hi {customerDetails.fullname} !
                            </p>
                            <p className="text-sm sm:text-base text-gray-500">
                                Your Order has been confirmed and will be deliver soon
                            </p>
                        </div>
                        <div className="text-sm sm:text-base md:text-right md:py-4">
                            <p className="text-gray-500">
                                We'll send you delivery confirmation when your item(s) are on the
                                way!
                            </p>
                            <h1 className="text-base sm:text-xl font-semibold py-1 text-prime">
                                Thank You!
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="grid grid-cols-2 gap-4 lg:flex">
                        <div className="lg:mr-6">
                            <h1 className="font-medium text-prime text-sm">Order Date</h1>
                            <p className="text-sm sm:text-base text-gray-500 font-medium">
                                {order.orderDate}
                            </p>
                        </div>
                        <div className="lg:mx-6">
                            <h1 className="font-medium text-prime text-sm">Order Number</h1>
                            <p className="text-sm sm:text-base text-gray-500 font-medium">
                                {order.orderNumber}
                            </p>
                        </div>
                        <div className="lg:mx-6">
                            <h1 className="font-medium text-prime text-sm">Payment</h1>
                            <p className="text-sm sm:text-base text-gray-500 font-medium">
                                {order.totalPayment}
                            </p>
                        </div>
                        <div className="lg:mx-6">
                            <h1 className="font-medium text-prime text-sm">Shipping Address</h1>
                            <p className="text-sm sm:text-base text-gray-500 font-medium">
                                {customerDetails.address}, {customerDetails.city}, {customerDetails.state} {customerDetails.pincode}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="cart-section">
                    {
                        order.foodDetails.map((food) => {
                            return (
                                <>
                                    <div className="grid grid-cols-10 sm:grid-cols-12 py-4 item gap-y-3">
                                        <div className="col-span-12 sm:col-span-8 lg:col-span-10 flex w-full items-start">
                                            <div className='w-fit'>
                                                <img
                                                    src={food.FoodImg}
                                                    alt=""
                                                    className="h-[70px]"
                                                />
                                            </div>
                                            <div className="py-2 px-4">
                                                <h1 className="text-base font-medium">{food.name}</h1>
                                            </div>
                                        </div>
                                        <div className="col-span-6 sm:col-span-2 lg:col-span-1 flex justify-center sm:items-center">
                                            <div>
                                                <h1 className="font-semibold">Qty: {food.quantity} </h1>
                                            </div>
                                        </div>
                                        <div className="col-span-6 sm:col-span-2 lg:col-span-1 flex justify-center sm:items-center">
                                            <div>
                                                <h1 className="font-semibold">
                                                    ₹ {food.total}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }


                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 py-2 sm:py-4">
                        <div className="sm:col-span-2 sm:hidden lg:block">

                        </div>
                        <div>
                            <div className="font-medium py-2">
                                <div className="flex justify-between py-1">
                                    <h1>Subtotal</h1>
                                    <p>₹ {order.totalPayment}</p>
                                </div>

                            </div>
                            <hr />
                            <div className="font-semibold py-2">
                                <div className="flex justify-between py-1">
                                    <h1>Total amount</h1>
                                    <p className="text-prime">₹ {order.totalPayment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-0 flex justify-end items-center">
                        <button
                            onClick={orderFinished}
                            className="bg-prime hover:bg-prime/90 transition duration-300 text-white px-4 py-1 rounded"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Success