import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { removeFromCart,increaseQuantity,decreaseQuantity } from '../redux/carts/actions';
import { addQuantity,removeQuantity } from '../redux/products/actions';
import Bill from './Bill';

const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const { id, nameProduct, imageURL, quantity, category, price, productId } = product;
    const handleremoveFromCart = () => {
      dispatch(removeFromCart(id))
      dispatch(addQuantity(productId, quantity))
    }
    if (quantity === 0) {
      handleremoveFromCart()
    }
    const handleIncreaseQuantity = () =>{
      dispatch(increaseQuantity(id))
      dispatch(removeQuantity(productId))
    }
    const handleDecreaseQuantity = () =>{
      dispatch(decreaseQuantity(id))
      dispatch(addQuantity(productId,1))
    }
    return (
      <div className="rounded-lg">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={imageURL}
            alt={nameProduct}
            className="w-full h-28 rounded sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h3 className="text-lg font-bold text-gray-900">{nameProduct}</h3>
              <p className="mt-1 text-sm text-gray-700">Price : {price} ฿</p>
              <p className="mt-1 text-sm text-gray-700">{category}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-1 bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500" onClick={handleDecreaseQuantity} >
                {" "}
                -{" "}
              </span>
              <input
                type="number"
                name=""
                min="1"
                value={quantity}
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
              />
              <span className="cursor-pointer rounded-1 bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500" onClick={handleIncreaseQuantity}>
                {" "}
                +{" "}
              </span>
            </div>
            <div className="text-items-center space-x-4">
              <p className="text sm">{price * quantity} ฿</p>
              <button className="lws-removeFromCart" onClick={handleremoveFromCart}  >
                <IoMdClose />
              </button>
            </div>
          </div>
         
        </div>
        
      </div>
      
    );
  };

export default CartItem