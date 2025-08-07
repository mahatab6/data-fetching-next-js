import React from 'react'
import ProductAddForm from './components/ProductAddForm'

export default function ProductAddPage() {
  return (
    <div>
        <h1 className='text-center text-4xl my-10'>Add New Product</h1>
        <div>
            <ProductAddForm/>
        </div>
    </div>
  )
}
