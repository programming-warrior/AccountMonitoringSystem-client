"use client";

import Link from 'next/link';
import { FormEvent, useState,useEffect } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email,setEmail]=useState<String>("");
    const [password,setPassword]=useState<String>("");
    const router=useRouter();

    const handleSubmit=async(e:FormEvent)=>{

        e.preventDefault();
        // const browserDetails={
        //   platform:navigator.,
        // }
        const res=await axios.post(`${process.env.NEXT_BACKEND_URL}/api/v1/login`,{
            email,
            password
        },{
            headers:{
                'Content-Type':'application/json',
            }
        })
        const {token,loginId,userId}=res.data.message;
        localStorage.setItem('token',token);
        localStorage.setItem('userId',userId);
        localStorage.setItem('loginId',loginId);
        
        router.push(`/dashboard?loginId=${loginId}&userId=${userId}`);
    }

    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
      console.log('login in');
    }



  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
 
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e)=>{handleSubmit(e)}}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              <div className='flex justify-center'>
                <Button handleClick={handleClick} textInside={"Log in"} loginId={"nothing"} submit={true}/>
              </div>
           
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
