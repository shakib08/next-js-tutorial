import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>This is all segment page</h1>
      <p>{params.topic}</p>
    </div>
  )
}

export default page
