import React from 'react'

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: "force-cache"
        });
    const data = await res.json();
  return (
    <div>
        <div>
            {
                data?.map((data)=>{
                    return(
                        <div key={data?._id}>
                            <h1>{data?.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
