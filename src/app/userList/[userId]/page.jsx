import React from 'react'

function page({params}) {
  return (
    <div>
      The user information is: {params.userId}
    </div>
  );
}

export default page
