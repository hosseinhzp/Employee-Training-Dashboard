import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='container max-w-7xl mx-auto px-6 py-10'>
      <h1 className='font-bold text-2xl mb-4'>Profile</h1>

      {/* User Profile */}
      <div className='mb-6 rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
        <div className='flex flex-col items-center gap-2 mb-4 xl:flex-row xl:items-start xl:justify-between'>
          <h1 className='font-semibold text-lg text-center xl:text-left'>Profile</h1>
          <Button className='hidden xl:inline-flex ml-4 h-8 px-3 text-sm rounded-full' aria-label='Edit profile'>
            <Pencil />
            Edit
          </Button>
        </div>
        <div className='flex flex-col items-center gap-4 xl:flex-row xl:items-center'>
          <Image src="/github.png" alt='' width={80} height={80} className='rounded-full' />
          <div className='flex flex-col items-center text-center xl:items-start xl:text-left'>
            <h1 className='font-semibold text-lg'>Musharof Chowdhury</h1>
            <span className='text-gray-400 text-sm'>
              Team Manager
              |
              Arizona, United States
            </span>
          </div>
          <div className='order-2 flex items-center gap-2 xl:order-3 xl:ml-auto'>
            <Link href="#" aria-label="Facebook profile" className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/facebooklogo.png" alt='Facebook logo' width={17} height={17} className="block m-auto" />
            </Link>
            <Link href="#" aria-label="X profile" className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/xlogo.png" alt='X logo' width={17} height={17} className="block m-auto" />
            </Link>
            <Link href="#" aria-label="GitHub profile" className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/github.png" alt='GitHub logo' width={23} height={23} className="block m-auto" />
            </Link>
            <Link href="#" aria-label="Instagram profile" className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/instalogo.png" alt='Instagram logo' width={18} height={18} className="block" />
            </Link>
          </div>
        </div>
        <div className='mt-4 flex justify-center xl:justify-end'>
          <Button className='w-full xl:w-auto h-8 px-3 text-sm rounded-full xl:hidden' aria-label='Edit profile'>
            <Pencil />
            Edit
          </Button>
        </div>
      </div>

      {/* Personal Information */}
      <div className='mb-6 rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
        <div className='flex flex-col items-center gap-2 mb-4 xl:flex-row xl:items-start xl:justify-between'>
          <h1 className='font-semibold text-lg text-center xl:text-left'>Personal Information</h1>
          <Button className='hidden xl:inline-flex ml-4 h-8 px-3 text-sm rounded-full' aria-label='Edit personal information'>
            <Pencil />
            Edit
          </Button>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32'>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>First Name</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>John</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Last Name</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Doe</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Email Address</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>john.doe@example.com</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Phone</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>+1 (555) 123-4567</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Bio</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Team Manager</p>
          </div>
        </div>
        <div className='mt-4 flex justify-center xl:justify-end'>
          <Button className='w-full xl:w-auto h-8 px-3 text-sm rounded-full xl:hidden' aria-label='Edit personal information'>
            <Pencil />
            Edit
          </Button>
        </div>
      </div>
      
      {/* Address */}
      <div className='rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
        <div className='flex flex-col items-center gap-2 mb-4 xl:flex-row xl:items-start xl:justify-between'>
          <h1 className='font-semibold text-lg text-center xl:text-left'>Address</h1>
          <Button className='hidden xl:inline-flex ml-4 h-8 px-3 text-sm rounded-full' aria-label='Edit address'>
            <Pencil />
            Edit
          </Button>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32'>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Country</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>USA</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>State</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>California</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Zip Code</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>90210</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>TAX ID</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>123-45-6789</p>
          </div>
        </div>
        <div className='mt-4 flex justify-center xl:justify-end'>
          <Button className='w-full xl:w-auto h-8 px-3 text-sm rounded-full xl:hidden' aria-label='Edit address'>
            <Pencil />
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
