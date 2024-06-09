"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter()
    const placeOrder = () =>{
        alert("Thanks for the registration")
        router.push("/registration")
    }
  return (
    <div>
      <h1>
        Register for the next carnival 2024
      </h1>
      <button onClick={placeOrder}>Register</button>
    </div>
  )
}

export default page
