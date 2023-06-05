import { FC } from 'react'
import { Layout } from '../../../components/layouts'

export const Settings: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <section className="min-w-full pb-5 shadow-lg rounded-lg">
        <div className="bg-[#ececec] flex justify-between py-2 px-5 rounded-t-lg mb-5">
          <p className="font-semibold text-[#606060]">Configuración de notificaciones</p>
        </div>
        <div className="px-5 text-[#606060]">
          <h3 className="font-semibold">Configuración de alertas de bajo inventario:</h3>
          <div className="px-5">
            <p>
              Permite recibir alertas cuando el nivel de inventario de un producto cae por debajo de
              un umbral establecido.
            </p>
            <button className="w-10 h-10 bg-[#35E871] text-white mr-2 rounded-md font-medium my-2">
              Sí
            </button>
            <button className="w-10 h-10 bg-[#FF0000] text-white rounded-md font-medium">No</button>
            <p>
              Establece la cantidad mínima de inventario para cada producto, a partir de la cual se
              activará la alerta de bajo inventario.
            </p>
            <input
              type="text"
              placeholder="Cantidad"
              className="bg-slate-200 p-2 my-2 rounded-md outline-none"
            />
          </div>
          
        </div>
        <div className="px-5 text-[#606060]">
          <h3 className="font-semibold">Configuraciones de Alertas de Precios:</h3>
          <div className="px-5">
            <p>
            Permite recibir alertas cuando el precio de un producto experimenta cambios significativos.
            </p>
            <button className="w-10 h-10 bg-[#35E871] text-white mr-2 rounded-md font-medium my-2">
              Sí
            </button>
            <button className="w-10 h-10 bg-[#FF0000] text-white rounded-md font-medium">No</button>
            <p>
            Establece el porcentaje mínimo de cambio de precio para cada producto, a partir del cual se activará la alerta de cambio de precios.
            </p>
            <input
              type="text"
              placeholder="Cantidad"
              className="bg-slate-200 p-2 my-2 rounded-md outline-none"
            />
          </div>
          
        </div>
      </section>
    </Layout>
  )
}
