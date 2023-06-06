import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

export const SalesPerProduct: React.FC = () => {
  const data: DataPoint[] = [
    { name: 'Smartphone', value: 150 },
    { name: 'Laptop', value: 300 },
    { name: 'Televisor', value: 250 },
    { name: 'Cámara', value: 100 },
    { name: 'Altavoz', value: 200 },
    { name: 'Tablet', value: 50 },
    { name: 'Auriculares', value: 180 },
    { name: 'Consola', value: 120 },
    { name: 'Smartwatch', value: 80 },
    { name: 'Impresora', value: 90 },
    { name: 'Proyector', value: 30 },
    { name: 'Monitor', value: 70 },
    { name: 'Drone', value: 110 },
    { name: 'Reproductor', value: 40 },
    { name: 'Aspiradora', value: 95 },
    { name: 'Teclado', value: 170 },
  ];

  const yAxisTickFormatter = (value: number) => {
    return `${value} u`;
  };

  const yAxisTicks = Array.from(Array(11).keys()).map((_, index) => index * 30);

  const renderTooltipContent = (props: any) => {
    const { payload, label } = props;

    if (payload && payload.length) {
      const dataPoint = payload[0];

      return (
        <div className='text-white p-2 rounded-xl bg-gradient-to-tl from-[#24DFEB] to-[#8464C9]'>
          <p>{`Producto: ${label}`}</p>
          <p>{`Cantidad: ${dataPoint.value} unidades`}</p>
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
