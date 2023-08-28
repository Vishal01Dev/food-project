import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload.reduce((total, num) => {
                return total + Number(num.total)
            }, 0)

        },
        addToCart: (state, action) => {
            const item = action.payload.item
            const quan = action.payload.quantity
            const size = action.payload.size


            const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
            if (loggedUser != null) {
                const bool = state.cart.some((data) => data.id === item.id && data.Uid === loggedUser.Uid);

                if (!bool) {
                    const obj = {
                        ...item,
                        Uid: loggedUser.Uid,
                        quantity: quan,
                        size: size,
                        total: quan * item.price
                    }
                    state.cart.push(obj)
                }
                else {
                    const cartIndex = state.cart.findIndex((val) => val.id === item.id)
                    state.cart[cartIndex].quantity = state.cart[cartIndex].quantity + quan
                    state.cart[cartIndex].size = size
                    state.cart[cartIndex].total = state.cart[cartIndex].total + (quan * item.price)
                }
            }
            else {
                const bool = state.cart.some((data) => data.id === item.id && data.Uid === 'guest');

                if (!bool) {
                    const obj = {
                        ...item,
                        Uid: 'guest',
                        quantity: quan,
                        size: size,
                        total: quan * item.price
                    }
                    state.cart.push(obj)
                }
                else {
                    const cartIndex = state.cart.findIndex((val) => val.id === item.id)
                    state.cart[cartIndex].quantity = state.cart[cartIndex].quantity + quan
                    state.cart[cartIndex].size = size
                    state.cart[cartIndex].total = state.cart[cartIndex].total + (quan * item.price)
                }
            }

            // console.log(bool)

            state.total = state.cart.reduce((total, num) => {
                return total + Number(num.total)
            }, 0)

        },
        removeFromCart: (state, action) => {
            const item = action.payload
            state.cart = state.cart.filter((val) => val.id !== item.id)

            state.total = state.cart.reduce((total, num) => {
                return total + Number(num.total)
            }, 0)


        },
        updateFromCart: (state, action) => {
            const item = action.payload
            const quan = action.payload.quantity
            const size = action.payload.size
            const type = action.payload.type



            const cartIndex = state.cart.findIndex((val) => val.id === item.id)
            state.cart[cartIndex].quantity = quan
            state.cart[cartIndex].size = size
            if (type === "dec") {
                state.cart[cartIndex].total !== item.price && (state.cart[cartIndex].total = state.cart[cartIndex].total - item.price)
                state.cart[cartIndex].total === item.price && (state.cart[cartIndex].total = state.cart[cartIndex].total)
            }
            else {
                state.cart[cartIndex].total = state.cart[cartIndex].total + item.price
            }
            state.total = state.cart.reduce((total, num) => {
                return total + Number(num.total)
            }, 0)
        }
    }
});

export const { addToCart, removeFromCart, updateFromCart, setCart, setTotal } = cartSlice.actions

export default cartSlice.reducer

