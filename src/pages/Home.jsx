import React from 'react'
import { useSelector } from 'react-redux'
import AddProduct from "../components/AddProduct"
import ProductItem from "../components/ProductItem"


const Home = () => {
    const products = useSelector((state) => state.products)
    // console.log(products);
    return (
        <div>
            <main className="py-8 max-w-7x1 mx-auto px-4">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
                    <div className="col-span-2">
                        <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
                        {products.length ? (
                products.map((p, i) => <ProductItem key={i} product={p} />)
              ) : (
                <div>No Product</div>
              )}
                        </div>
                    </div>
                    <AddProduct/>
                </div>
            </main>
        </div>
    )
}

export default Home