import React from 'react'
import { useSelector } from 'react-redux'
import MyCart from '../pages/MyCart'
import Home from '../pages/Home'

const Page = () => {
  const page = useSelector((state) => state.pages);
  return <div>{page.home ? <Home /> : <MyCart />}</div>;
};

export default Page

