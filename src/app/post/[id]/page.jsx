import React from 'react'

export default  function PostDetails({params}) {
    const p =  params.id;
    console.log(p) 

  return (
    <div>PostDetails- {p}</div>
  )
}
