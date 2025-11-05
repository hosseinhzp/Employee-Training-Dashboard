import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'

const LoginPage = () => {
  return (
    <div className='max-w-md mx-auto w-full min-h-0 lg:min-h-screen pt-6 px-4'>
      {/* Breadcrumb */}
  <Breadcrumb className="mb-8 lg:mb-20">
        <BreadcrumbList>
          <BreadcrumbSeparator reversed/>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Back to dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Top */}
  <div className='mx-auto flex w-full max-w-md flex-col justify-center'>
        <div className='mb-5 sm:mb-8'>
          <h1 className='text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-muted-foreground mt-3'>Enter your email and password to sign up!</p>
        </div>
      </div>
      {/* Middle */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-md mx-auto mb-3'>
        <Button variant="ghost" className='w-full cursor-pointer bg-sky-50 dark:text-black rounded-lg hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-200 py-6'>
          <Image src="/google.png" alt="Google Icon" width={20} height={20} className='mr-2'/>
          Sign in with Google
        </Button>
        <Button variant="ghost" className='w-full cursor-pointer bg-sky-50 dark:text-black rounded-lg hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-200 py-6'>
          <Image src="/github.png" alt="GitHub Icon" width={20} height={20} className='mr-2'/>
          Sign in with GitHub
        </Button>
      </div>
      <div className='relative flex justify-center text-sm text-gray-300'>
        __________________________________
        <span className='bg-white dark:bg-background p-2 text-gray-400 sm:px-5 sm:py-2'>Or</span>
        __________________________________
      </div>
      {/* Register Form */}
      <RegisterForm />
    </div>
  )
}

export default LoginPage
