import { FC, PropsWithChildren } from 'react';

interface Props {
  count: number;
}

const CountIcon: FC<PropsWithChildren<Props>> = ({ children, count }) => {
  return (
    <div className='relative'>
      <div className='absolute -top-[7px] left-3 flex justify-center items-center w-4 h-4 rounded-full bg-red-400'>
        <p className='text-[8px] font-extrabold text-white'>{count > 9 ? '+9' : count}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CountIcon;
