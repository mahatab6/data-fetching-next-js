"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

export default function RegisterPage() {

    const { register, handleSubmit, reset  } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await fetch("/api/register",{
                method: "POST",
                headers: { "Content-Type": "appliction/json"},
                body: JSON.stringify(data),
            });

            const result = await res.json();
            console.log("Server response", result);

            if(res.ok){
                alert("User registered successfully!"),
                reset();
            }
        } catch (error) {
            console.log("server api", error)
        }
    }

  return (
    <form className='text-xl font-bold text-center py-20' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label className='block' htmlFor="">Email</label>
            <input className=' border-2 p-1' type="email" placeholder="Email" {...register("email", {})} />
        </div>
        <div>
            <label className='block' htmlFor="">Password</label>
            <input className='border-2 p-1' type="password" placeholder="Password" {...register("password", {})} />
        </div>
        <button className='bg-purple-600 p-2 rounded-xl m-4 hover:cursor-pointer' type='submit'>Submit</button>
    </form>
  )
}
