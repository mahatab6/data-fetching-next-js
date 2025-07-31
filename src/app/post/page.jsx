import React from 'react'

export const getPost =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}


export default async function Page() {
    const posts = await getPost();
  return (
    <div>
        {
            posts.map((singlepost)=>{
                return (
                    <div key={singlepost.id} className=''>
                        <div className='flex flex-col mb-5'>
                            <p>{singlepost.id}</p>
                            <p>{singlepost.title}</p>
                            <p>{singlepost.body}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
