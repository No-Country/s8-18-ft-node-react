import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { BoxModal } from '../../../components/ui/BoxModal'

interface FormData {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
}

interface MyComponentProps {
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  item: T;
}

export const EditModal: FC<MyComponentProps> = ({ setModalEdit, item }) => {

  const [formData, setFormData] = useState<FormData[]>([
    {
      id: 'name',
      label: 'Nombre del producto:',
      type: 'text',
      name: 'name',
      placeholder: 'Ingrese un nombre del producto',
      value: item.name,
    },
    {
      id: 'description',
      label: 'Descripción:',
      type: 'text',
      name: 'description',
      placeholder: 'Ingrese una descripción',
      value: item.description,
    },
    {
      id: 'brand',
      label: 'Marca:',
      type: 'text',
      name: 'brand',
      placeholder: 'Ingrese la marca',
      value: item.brand,
    },
    {
      id: 'price',
      label: 'Precio:',
      type: 'text',
      name: 'price',
      placeholder: 'Ingrese un precio',
      value: item.price,
    },
    {
      id: 'quantity',
      label: 'Cantidad:',
      type: 'text',
      name: 'quantity',
      placeholder: 'Ingrese una cantidad',
      value: item.quantity,
    },
    {
      id: 'category',
      label: 'Categoria:',
      type: 'text',
      name: 'category',
      placeholder: 'Ingrese una categoria',
      value: item.category,
    },
    {
      id: 'supplier',
      label: 'Proveedor:',
      type: 'text',
      name: 'supplier',
      placeholder: 'Ingrese nombre del proveedor',
      value: item.supplier,
    },

  ])

  const handleInputChange = (id: string, value: string) => {
    setFormData((prevFormData) => prevFormData.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const endpoint = 'https://api-crm-cuaz.onrender.com/supplier-list'; 
      const response = await fetch(endpoint, {
        method: 'POST',
       headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
  
      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <BoxModal title='Editar producto'>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex p-5">
          {formData.map((item) => (

          <div key={item.id} className="sm:col-span-4">
              <label htmlFor={item.id} className="block text-sm font-medium leading-6 text-gray-900">{item.label}</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  sm:max-w-md">
                <input
                  type={item.type}
                  name={item.name}
                  id={item.id}
                  className="block focus:outline-none flex-1 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder={item.placeholder}
                  value={item.value}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    required
                />
              </div>
            </div>
          </div>
          ))}

          <div className="mt-2 text-center sm:mx-4 sm:text-left">
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                type='submit'
                className="w-full mt-2 p-2.5 flex-1 text-white bg-[#35E871] rounded-md outline-none"
                onClick={() => setModalEdit(false)}
              >
                Guardar
              </button>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-white bg-[#ff0000] rounded-md outline-none"
                onClick={() => setModalEdit(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </BoxModal>
    </>
  )
}
