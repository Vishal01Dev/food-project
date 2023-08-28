import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, ErrIcon } from '../icons/CommonIcons';
import { setCart } from '../../redux/slices/cartSlice';

const Payment = ({ address, setOrderState, setCardDetails, cardDetails, setOrder }) => {


    const dispatch = useDispatch();

    const { cart, total } = useSelector((state) => state.cart);

    const inputHandler = (e) => {

        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        })

        let cp = /^4[0-9]{12}(?:[0-9]{3})?$/;
        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let cvp = /^[0-9]{3,4}$/;


        if (e.target.value === "") {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'cardNumber' && !e.target.value.match(cp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'cardEmail' && !e.target.value.match(ep)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'cvc' && !e.target.value.match(cvp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else {
            document.getElementById(`${e.target.name}err`).classList.add('hidden');
        }

    }


    function getFormattedDate() {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'long' });
        const year = today.getFullYear();
        return `${day} ${month} ${year}`;
    }



    function checkPayment() {

        let fields = [cardDetails.cardNumber, cardDetails.expiry, cardDetails.cvc, cardDetails.cardName, cardDetails.cardEmail];
        let cp = /^4[0-9]{12}(?:[0-9]{3})?$/;
        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let cvp = /^[0-9]{3,4}$/;
        let val = false


        if (fields.every((val) => val === "")) {
            document.getElementById(`cardNameerr`).classList.remove('hidden');
            document.getElementById(`expiryerr`).classList.remove('hidden');
            document.getElementById(`cvcerr`).classList.remove('hidden');
            document.getElementById(`cardNumbererr`).classList.remove('hidden');
            document.getElementById(`cardEmailerr`).classList.remove('hidden');
        }

        for (let x in cardDetails) {
            if (cardDetails[x] === "" || (x === "cardEmail" && !cardDetails[x].match(ep)) || (x === "cvc" && !cardDetails[x].match(cvp)) || (x === "cardNumber" && !cardDetails[x].match(cp))) {
                document.getElementById(`${x}err`).classList.remove('hidden');
                val = false;
            }
            else {
                document.getElementById(`${x}err`).classList.add('hidden');
                val = true;
            }
        }
        if (val == true) {

            const order = {
                orderNumber: Math.floor(Math.random() * 1000) + 1,
                orderDate: getFormattedDate(),
                customerDetails: address,
                foodDetails: cart,
                paymentDetails: cardDetails,
                totalPayment: total
            }


            setOrder(order);

            const orders = JSON.parse(window.localStorage.getItem('orders'));
            if (orders == null) {
                window.localStorage.setItem('orders', JSON.stringify([order]));
            }
            else {
                window.localStorage.setItem('orders', JSON.stringify([...orders, order]));
            }
            dispatch(setCart([]));
            setOrderState(4);
        }
    }

    return (
        <div className='my-10 grid grid-cols-12 gap-y-5 lg:gap-10'>
            <div className="col-span-12 lg:col-span-7">
                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Credit/Debit card details</h1>
                <form>
                    <div x-show="card">
                        <div className="space-y-4">

                            <div>
                                <label className="block mb-1 text-xs font-medium text-gray-400" htmlFor="card-nr">
                                    Card Number
                                </label>
                                <input
                                    name="cardNumber"
                                    id="card-nr"
                                    className="w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none"
                                    type="text"
                                    placeholder="1234 1234 1234 1234"
                                    value={cardDetails.cardNumber}
                                    onChange={inputHandler}
                                />
                                <span id="cardNumbererr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid card number</span></span> </span>
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block mb-1 text-xs font-medium text-gray-400" htmlFor="card-expiry">
                                        Expiry Date
                                    </label>
                                    <input
                                        name="expiry"
                                        id="card-expiry"
                                        className="w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none"
                                        type="month"
                                        value={cardDetails.expiry}
                                        placeholder="MM/YY"
                                        onChange={inputHandler}
                                    />
                                    <span id="expiryerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid expiry date</span></span> </span>
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-1 text-xs font-medium text-gray-400" htmlFor="card-cvc">
                                        CVC
                                    </label>
                                    <input
                                        name='cvc' maxLength='3'
                                        id="card-cvc"
                                        className="w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none"
                                        type="text"
                                        placeholder="CVC"
                                        value={cardDetails.cvc}
                                        onChange={inputHandler}
                                    />
                                    <span id="cvcerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid cvc</span></span> </span>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-xs font-medium text-gray-400" htmlFor="card-name">
                                    Name on Card
                                </label>
                                <input
                                    name="cardName"
                                    id="card-name"
                                    className="w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none"
                                    type="text"
                                    placeholder="John Doe"
                                    value={cardDetails.cardName}
                                    onChange={inputHandler}
                                />
                                <span id="cardNameerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid card name</span></span> </span>
                            </div>

                            <div>
                                <label className="block mb-1 text-xs font-medium text-gray-400" htmlFor="card-email">
                                    Email
                                </label>
                                <input
                                    name="cardEmail"
                                    id="card-email"
                                    className="w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none"
                                    type="email"
                                    placeholder="john@company.com"
                                    onChange={inputHandler}
                                />
                                <span id="cardEmailerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid email</span></span> </span>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
            <div className="col-span-12 lg:col-span-5">
                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Payment details</h1>
                <div className="bg-gray-100 shadow rounded-3xl p-5">
                <div className='bg-white shadow rounded-3xl p-5 sm:p-8  relative h-full'>
                        {
                            cart.map((item) => {
                                // console.log(item)
                                return (
                                    <>

                                        <div className="grid grid-cols-4 gap-5 py-3 relative">
                                            <div className="col-span-1">
                                                <img src={item.FoodImg} alt="dummy" />
                                            </div>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <h1 className='font-semibold'>{item.name}</h1>
                                                <p className='font-bold'>x <span>{item.quantity}</span></p>
                                            </div>
                                            <div className="col-span-4 sm:col-span-1 absolute sm:static bottom-3 right-0">
                                                <h1 className='text-base md:text-lg font-bold text-prime text-end'>₹<span className='ml-1'>{item.total}</span></h1>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <hr className='h-0.5 my-5 bg-prime' />
                        <div className='flex items-center justify-between my-1'>

                            <div className=''>
                                <h1 className='text-xl font-bold '>Total</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-base font-bold md:text-xl text-prime '>₹<span className='ml-1'>{total}</span></h1>
                            </div>
                        </div>
                        <div className='w-full mt-8'>
                            <button onClick={checkPayment} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-full flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'><span className='mx-auto uppercase font-medium sm:font-bold text-xs sm:text-sm'>Pay</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment