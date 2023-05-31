import React from 'react'
import Arrow from '../../../assets/arrow.svg'

interface BoxCardProps {
  icon: React.ReactNode;
  title: string;
  cont: string;
  className?: string;
}

export const BoxCard: React.FC<BoxCardProps> = ({icon, title, cont, className}) => {
  return (
    <div className={`rounded-lg flex p-5 text-white bg-gradient-to-tl ${className}`}>
      <div className='w-[90%] font-medium'>
        {icon}
        <p className='mt-2'>{title}</p>
      </div>
      <div className='p-1'>
        <div className='flex gap-2'>
          <span className='text-2xl font-medium'>{cont}</span>
        <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  )
}
