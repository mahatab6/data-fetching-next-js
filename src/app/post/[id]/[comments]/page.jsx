import React from 'react'

 export const SingleComment = async (id) =>{
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await res.json();
    return data;
 }


export default async function CommentsPage({params}) {
    const id = params.id;
    const comment = await SingleComment(id)
    
  return (
    <div className='text-center'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <div className=' space-y-2'>
            {
                comment.map((data)=>{
                    return(
                        <div key={data?.id}>
                            <h1>{data?.name}</h1>
                            <p>{data?.email}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
