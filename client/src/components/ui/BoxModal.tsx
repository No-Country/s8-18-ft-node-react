import { FC, PropsWithChildren } from 'react'

interface Props {
  title: string;
}

export const BoxModal: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black/30 backdrop-blur-[0.5px]"
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
            <div className="bg-gray-200 py-2 px-5 rounded-t-md font-medium">
              <span>{title}</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
