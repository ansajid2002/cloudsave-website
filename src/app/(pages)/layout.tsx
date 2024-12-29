import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Infinite Storage Solutions",
    description: "Welcome to our lightning fast and Secure Cloud Storage Solution",
  };

const layout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default layout
