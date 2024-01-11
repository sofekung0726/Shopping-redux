import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const AddProduct = () => {
   const  dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(addProduct(data))
        reset()
    }
    return (
        <div className='formContainer'>
            <h1 className="formTitle">
                Add new product
            </h1>
            <form className="space-y-4 text-[#ffffff]" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <label >Product Name</label>
                    <input type="text" className='addProductInput' {...register("nameProduct", { required: true })}/>
                    {errors.nameProduct && <span className='text-[#ff1d1d]'>Product name is required</span>}

                </div>
                <div className="space-y-2">
                    <label >Category</label>
                    <select className="addProductInput" {...register("category", { required: true })}>
                        <option value="">Select a category</option>
                        <option value="clothing">Clothing</option>
                        <option value="gadgets">Gadgets </option>
                        <option value="bags">Bags</option>
                    </select>
                    {errors.category && <span className='text-[#ff1d1d]'>Category is required</span>}
                </div>
                <div className="space-y-2">
                    <label >Image URL</label>
                    <input type="text" className="addProductInput" {...register("imageURL", { required: true })} />
                    {errors.imageURL && <span className='text-[#ff1d1d]'>Image is required</span>}
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label >Price</label>
                        <input type="number" className='addProductInput' {...register("price", { required: true ,min:0 })}/>
                        {errors.price && <span className='text-[#ff1d1d]'>Please enter a valid price</span>}
                    </div>
                    <div className="space-y-2">
                        <label >Quantity</label>
                        <input type="number" className='addProductInput' id='lws-inputQuantity' {...register("quantity", { required: true ,min:0})}/>
                        {errors.quantity && <span className='text-[#ff1d1d]'>Please enter a valid quantity</span>}
                    </div>
                </div>
                <button type='submit' className='submit bg-indigo-600 text-white'>
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct