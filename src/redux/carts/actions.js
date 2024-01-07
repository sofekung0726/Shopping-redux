import {ADD_TO_CART , REMOVE_FROM_CARD,INCREASE_QUANTITY,DECREASE_QUANTITY} from "./actionType"

export const addToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const removeFromCart = (productId) =>{
    return {
        type: REMOVE_FROM_CARD,
        payload: productId
    }
}
export const increaseQuantity = (productId) =>{
    return {
        type: INCREASE_QUANTITY,
        payload: productId
    }
}
export const decreaseQuantity = (productId) =>{
    return {
        type: DECREASE_QUANTITY,
        payload: productId
    }
}
