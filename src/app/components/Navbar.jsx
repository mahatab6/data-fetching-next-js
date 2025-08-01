import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/post'>Post</Link>
    </div>
  )
}
