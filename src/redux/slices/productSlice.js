import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FoodData } from '../../assets/Data/FoodData';



const foods = {
    products: FoodData
}

const productSlice = createSlice({
    name: "products",
    initialState: foods,
    reducers: {
        // setFoods: (state, action) => {
        //     state.products = action.payload
        // }
    }
});

export const { } = productSlice.actions

export default productSlice.reducer

// export const fetchFoods = () => {
//     return async function fetchThunk(dispatch, getState) {
//         try {
//             const res = await fetch('http://localhost/food-project/getFoods.php');
//             const data = await res.json();
//             const val = data.data
//             // console.log(val)
//             dispatch(setFoods(val))

//         }
//         catch (err) {
//             console.log(err)
//         }
//     }
// }