import Link from 'next/link'
import React from 'react'
import Login from './Login'
import { getServerSession } from 'next-auth'
import { authOption } from '@/lib/authOption'

export default async function Navbar() {
  return (
    <div className='flex justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/post'>Post</Link>
        <Link href='/products'>Product</Link>
        <Link href='/products/add'>Add Product</Link>
        <Link href='/meal'>Meals</Link>
        <Login/>
    </div>
  )
}
