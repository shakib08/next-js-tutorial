import React from 'react'

function layout({children}) {
  return (
    <div>
      <h1 className='welcome'>Welcome to nextjs tutorial</h1>
      {children}
    </div>
  )
}

export default layout
