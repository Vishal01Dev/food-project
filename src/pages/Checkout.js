import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dummyImg from '../assets/images/pizza/pp-2.webp'
import { ArrowRight, HomeIcon } from '../components/icons/CommonIcons'
import { fetchMain } from '../redux/slices/fetchMain'
import { useSelector } from 'react-redux'
import CheckOutForm from '../components/checkout/CheckOutForm'
import Confirmation from '../components/checkout/Confirmation'
import Payment from '../components/checkout/Payment'
import Success from '../components/checkout/Success'

const Checkout = ({URL}) => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  const [orderState, setOrderState] = useState(1)

  const [address, setAddress] = useState({
    fullname: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pincode: ''
  })

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardName: '',
    cardEmail: ''
  });


  const [order, setOrder] = useState({});


  return (
    <div className='pt-20 lg:pt-16 px-5 sm:px-10 lg:px-16 xl:px-24'>
      <div className='mt-10 flex flex-col justify-center items-center py-3 sm:py-5'>
        <h1 className='text-2xl sm:text-4xl font-bold'>
          Checkout
        </h1>
        <p className='text-gray-500 font-semibold my-4'>flll out the details for checkout</p>
      </div>

      <div className="mx-auto my-4 ">
        <div className="flex pb-3">
          <div className="flex-1">
          </div>


          <>
            <div className="flex-1">


              {
                orderState != 1 ? <div className="w-10 h-10 bg-prime mx-auto rounded-full text-lg text-white flex items-center">
                  <span className="text-white text-center w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  </span>
                </div>
                  :
                  <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">1</span>
                  </div>
              }


            </div>
            <div className="w-1/6 align-center items-center align-middle content-center flex">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div className="bg-prime text-xs leading-none py-1 text-center text-gray-400 rounded " style={orderState != 1 ? { width: '100%' } : { width: '20%' }} />
              </div>
            </div>
          </>



          <>
            <div className="flex-1">


              {
                orderState != 1 && orderState != 2 ? <div className="w-10 h-10 bg-prime mx-auto rounded-full text-lg text-white flex items-center">
                  <span className="text-white text-center w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  </span>
                </div>
                  :
                  <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">2</span>
                  </div>
              }



            </div>
            <div className="w-1/6 align-center items-center align-middle content-center flex">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div className="bg-prime text-xs leading-none py-1 text-center text-gray-400 rounded " style={orderState == 2 ? { width: '20%' } : orderState > 2 ? { width: '100%' } : { width: '0%' }} />
              </div>
            </div>
          </>



          <>
            <div className="flex-1">

              {
                orderState != 1 && orderState != 2 && orderState != 3 ? <div className="w-10 h-10 bg-prime mx-auto rounded-full text-lg text-white flex items-center">
                  <span className="text-white text-center w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  </span>
                </div>
                  :
                  <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">3</span>
                  </div>
              }


            </div>
            <div className="w-1/6 align-center items-center align-middle content-center flex">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div className="bg-prime text-xs leading-none py-1 text-center text-grey-darkest rounded " style={orderState == 3 ? { width: '20%' } : orderState > 3 ? { width: '100%' } : { width: '0%' }} />
              </div>
            </div>
          </>


          <>
            <div className="flex-1">


              {
                orderState != 1 && orderState != 2 && orderState != 3 ? <div className="w-10 h-10 bg-prime mx-auto rounded-full text-lg text-white flex items-center">
                  <span className="text-white text-center w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  </span>
                </div>
                  :
                  <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">4</span>
                  </div>
              }

            </div>

          </>

          <div className="flex-1">
          </div>


        </div>


        <div className="flex text-base font-semibold text-gray-400 content-center text-center">

          <div className="flex-1 sm:w-1/4 text-sm sm:text-base text-prime font-bold">
            Checkout
          </div>

          <div className={orderState >= 2 ? 'flex-1 sm:w-1/4 text-sm sm:text-base text-prime font-bold' : ' text-sm sm:text-base flex-1 sm:w-1/4'} >
            Confirmation
          </div>

          <div className={orderState >= 3 ? 'flex-1 sm:w-1/4 text-prime font-bold text-sm sm:text-base' : 'flex-1 sm:w-1/4 text-sm sm:text-base'}>
            Payment
          </div>

          <div className={orderState >= 4 ? 'flex-1 sm:w-1/4 text-prime font-bold text-sm sm:text-base' : 'flex-1 sm:w-1/4 text-sm sm:text-base'}>
            Finish
          </div>

        </div>
      </div>

      {
        orderState == 1 &&
        <CheckOutForm setOrderState={setOrderState} address={address} setAddress={setAddress} />

      }

      {
        orderState == 2 &&
        <Confirmation address={address} setOrderState={setOrderState} />
      }
      {
        orderState == 3 &&
        <Payment address={address} cardDetails={cardDetails} setCardDetails={setCardDetails} setOrderState={setOrderState} setOrder={setOrder} />
      }
      {
        orderState == 4 &&
        <Success URL={URL} setOrderState={setOrderState} order={order} />
      }


    </div >
  )
}

export default Checkout