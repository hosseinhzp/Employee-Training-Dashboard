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
      <div className='mb-6 rounded-2xl bg-sidebar border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
        <div className='flex flex-col items-center gap-2 mb-4 xl:flex-row xl:items-start xl:justify-between'>
          <h1 className='font-semibold text-lg text-center xl:text-left'>Profile</h1>
          <Button className='hidden xl:inline-flex ml-4 h-8 px-3 text-sm rounded-full' aria-label='Edit profile'>
            <Pencil />
            Edit
          </Button>
        </div>
        <div className='flex flex-col items-center gap-4 xl:flex-row xl:items-center'>
          <div className="relative rounded-full overflow-hidden w-35 h-35">
            <Image
              src="/profile-photo.jpg"
              alt="Musharof Chowdhury"
              fill
              className="object-cover"
            />
          </div>
          <div className='flex flex-col items-center text-center xl:items-start xl:text-left'>
            <h1 className='font-semibold text-lg'>Emma Lopez</h1>
            <span className='text-gray-400 text-sm'>
              Product Designer
              |
              Boston, Massachusetts, United States
            </span>
          </div>
          <div className='order-2 flex items-center gap-2 xl:order-3 xl:ml-auto'>
            <Link href="#" aria-label="Facebook profile" className='border-3 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/facebook.svg" alt='Facebook logo' width={25} height={25} className="block m-auto dark:invert" />
            </Link>
            <Link href="#" aria-label="X profile" className='border-3 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/X.svg" alt='X logo' width={25} height={25} className="block m-auto dark:invert" />
            </Link>
            <Link href="#" aria-label="GitHub profile" className='border-3 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/github.svg" alt='GitHub logo' width={25} height={25} className="block m-auto dark:invert" />
            </Link>
            <Link href="#" aria-label="Instagram profile" className='border-3 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/instagram.svg" alt='Instagram logo' width={25} height={25} className="block m-auto dark:invert" />
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
      <div className='mb-6 rounded-2xl bg-sidebar border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
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
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Emma</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Last Name</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Lopez</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Email Address</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>emma.lopez@example.com</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Phone</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>+1 (617) 555-0142</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Bio</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Product Designer</p>
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
      <div className='rounded-2xl bg-sidebar border border-gray-200 p-5 lg:p-6 dark:border-gray-800'>
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
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Massachusetts</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>Zip Code</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>02115</p>
          </div>
          <div>
            <p className='mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400'>TAX ID</p>
            <p className='text-sm font-medium text-gray-800 dark:text-white/90'>987-65-4321</p>
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
