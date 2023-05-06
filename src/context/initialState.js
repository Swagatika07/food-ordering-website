import { fetchUser,fetchCart } from "../utils/fetchLocalStorageData";
// import { foodItems } from "../utils/data";
const userInfo = fetchUser()
const cartInfo = fetchCart();


export const initialState = {
    user: userInfo,
    cartShow: false,
    cartItems: cartInfo,
};

