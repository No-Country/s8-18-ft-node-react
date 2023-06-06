import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

export const ReplenishmentTime: React.FC = () => {
  const data: DataPoint[] = [
    { name: 'Smartphones', value: 0 },
    { name: 'Smart TV', value: 40 },
    { name: 'Laptops', value: 20 },
    { name: 'Auriculares', value: 6 },
    { name: 'Cámaras', value: 7 },
    { name: 'Consolas', value: 10 },
    { name: 'Altavoz', value: 50 },
    { name: 'Smartwatch', value: 6 },
    { name: 'Tablets', value: 40 },
    { name: 'Monitores', value: 6 },
  ];

  const yAxisTickFormatter = (value: number) => {
    return `${value} d`;
  };

  const yAxisTicks = Array.from(Array(11).keys()).map((_, index) => index * 6);

  const renderTooltipContent = (props: any) => {
    const { payload, label } = props;

    if (payload && payload.length) {
      const dataPoint = payload[0];

      return (
        <div className='text-white p-2 rounded-xl bg-gradient-to-tl from-[#24DFEB] to-[#8464C9]'>
          <p>{`Producto: ${label}`}</p>
          <p>{`Dias: ${dataPoint.value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <AreaChart width={600} height={400} data={data} margin={{ top: 10, right: 10, bottom: 15, left: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" interval={0} angle={-30} tick={{ fontSize: 12, dy: 15, dx: -20 }} />
      <YAxis tickFormatter={yAxisTickFormatter} ticks={yAxisTicks} interval={0} tick={{ fontSize: 12, dx: -2 }} />
      <Area type="monotone" dataKey="value" stroke="#A3A3A3" fill="url(#colorGradient)" />
      <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(53, 232, 113, 1)" />
            <stop offset="100%" stopColor="rgba(53, 232, 113, 0.5)" />
          </linearGradient>
        </defs>
      <Tooltip content={renderTooltipContent} />
    </AreaChart>
  );
};
