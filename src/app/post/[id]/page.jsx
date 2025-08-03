import Link from 'next/link';
import React from 'react'

export const singlepostId = async (id)=>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
  const id = params?.id;
 
  // fetch post information
  const post = await singlepostId(id);
 
  return {
    title: post?.title,
    description: post?.body,
  }
}

export default async function PostDetails({params}) {

    const id =  params?.id;
    const post = await singlepostId(id);
  

  return (
    <div className='text-center'>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <Link href={`/post/${post?.id}/comments`}><button className='text-xl p-2 bg-yellow-500'>Comments</button></Link>
    </div>
  )
}
