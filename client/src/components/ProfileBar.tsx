import { FC } from 'react'

import { CountIcon } from './ui'

import {
  ChevronLeftIcon,
  BellIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid'

const ProfileBar: FC = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12 shadow-md px-5 text-[#606060]">
        <div className="flex gap-3">
          <ChevronLeftIcon className="h-6 w-6 border-2 border-black rounded-full" />
        </div>
        <div className="flex items-center gap-3">
          <CountIcon count={1}>
            <EnvelopeIcon className="h-6 w-6" />
          </CountIcon>
          <CountIcon count={14}>
            <BellIcon className="h-6 w-6" />
          </CountIcon>
          <div
            className="bg-cover bg-center w-10 h-10 rounded-full"
            style={{
              backgroundImage:
                "url('https://variety.com/wp-content/uploads/2023/04/Twitter-Logo-Doge-Dogecoin.png?w=640&h=360&crop=1')",
            }}
          />
        </div>
      </div>
      <div className='h-12 shadow-md'>

      </div>
    </>
  )
}

export default ProfileBar
