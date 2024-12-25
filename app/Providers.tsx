"use client"

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'

type Props = {
    children: React.ReactNode, 
}

const Providers = (props: Props) => {
    const { children } = props;
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  return (
    <GoogleOAuthProvider clientId={clientId}>
        { children }
    </GoogleOAuthProvider>
  )
}

export default Providers;