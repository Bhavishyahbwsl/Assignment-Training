'use client'

import React, { useState } from 'react'
import ProductPage from '@/components/ProductPage';
import LoginPage from '@/components/LoginPage';

const page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (val) =>{
    setIsLoggedIn(val);
  }
  return (
    <div>
      {isLoggedIn ? (
        <ProductPage />
      ) : <LoginPage handleLogin={handleLogin}/>}

    </div>
  )
}

export default page