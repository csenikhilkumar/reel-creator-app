"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

function Headers() {
    const {data:session} = useSession()
    const handleSignOut = async() => {
        try {
            await signOut()
        } catch (error) {
            
        }
    }

  return (<>
    <div onClick={handleSignOut}>signOut</div>
    {session ? (<div>welcome</div>) : (<div>hello nice to meet you </div>)}
    <div>
        <Link href="/login"></Link>
        <Link href="register"></Link>
    </div>
    </>
  )
}

export default Headers