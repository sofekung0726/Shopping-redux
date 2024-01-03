import React from 'react'
import {useForm} from 'react-hook-form'
const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className='formCointainer'>
<h1 className="formTitle">
    Add new product
</h1>
    <form  className="space-y-4 text-[#ffffff]" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
            <label >Product Name</label>
            <input type="text"className='addProductInput' />
        </div>
        <div className="space-y-2">
            <label >Category</label>
            <select  className="addProductInput">
                <option value="">Select a category</option>
                <option value="clothing">Clothing</option>
                <option value="gadgets">Gadgets </option>
                <option value="bags">Bags</option>
            </select>
        </div>
        <div className="space-y-2">
            <label >Image URL</label>
            <input type="text" className="addProductInput" />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
                <label >Price</label>
                <input type="number" className='addProductInput' />
            </div>
            <div className="space-y-2">
            <label >Quantity</label>
                <input type="number" className='addProductInput' id='lws-inputQuantity' />
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