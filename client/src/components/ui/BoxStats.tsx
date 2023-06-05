import { FC, PropsWithChildren } from 'react'

interface Props {
  title: string
}

export const BoxStats: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className="flex">
      <div className="relative w-full bg-white rounded-md shadow-lg overflow-hidden">
        <div className="bg-gray-200 py-2 px-5 rounded-t-md font-medium">
          <span>{title}</span>
        </div>
        {children}
      </div>
    </div>
  )
}
