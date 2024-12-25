"use client"

import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GoogleLogin } from '@react-oauth/google';
import { auth } from '@/services/auth/User';

type Props = {}

const Profile = (props: Props) => {
    const isLoggedIn = false;

    const onSuccess = async (res: {credential?: string }) => {
      if (!res.credential) return;
      auth(res.credential)
    };
  return (
    <>
      {isLoggedIn 
      ? (
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-1'>
             <Link href={`/user/$user.id`} className='text-neutral-400 font-semibold hover:underline'>
              Hristoz Ognyanov
             </Link>
             <Avatar className='w-8 h-8'>
                <AvatarImage src="https://avatars.githubusercontent.com/u/131011519?s=96&v=4"/>
                <AvatarFallback>HO</AvatarFallback>
             </Avatar>
            </div> 
        </div>
        )

      : (
       <GoogleLogin onSuccess={res => onSuccess(res)} onError={()=> console.error("Something gone wrong try again!")}/>
      )}
    </>
  )
}

export default Profile;