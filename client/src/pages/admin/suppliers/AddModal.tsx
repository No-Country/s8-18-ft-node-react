import React, { FC, useState } from 'react'
import { BoxModal } from '../../../components/ui/BoxModal'

interface FormData {
  id: string
  label: string
  type: string
  name: string
  placeholder: string
  value: string
}

export const AddModal: FC = ({ setAddModal }) => {
  const [formData, setFormData] = useState<FormData[]>([
    {
      id: 'name',
      label: 'Nombre del proveedor:',
      type: 'text',
      name: 'name',
      placeholder: 'Ingrese un nombre del proveedor',
      value: '',
    },
    {
      id: 'address',
      label: 'Dirección:',
      type: 'text',
      name: 'address',
      placeholder: 'Ingrese la dirección',
      value: '',
    },
    {
      id: 'city',
      label: 'Ciudad:',
      type: 'text',
      name: 'city',
      placeholder: 'Ingrese la ciudad',
      value: '',
    },
    {
      id: 'country',
      label: 'Pais:',
      type: 'text',
      name: 'country',
      placeholder: 'Ingrese el país',
      value: '',
    },
    {
      id: 'phone',
      label: 'Teléfono:',
      type: 'text',
      name: 'phone',
      placeholder: 'Ingrese el teléfono',
      value: '',
    },
    {
      id: 'email',
      label: 'Correo electrónico:',
      type: 'email',
      name: 'email',
      placeholder: 'Ingrese un correo electrónico',
      value: '',
    },
    {
      id: 'contact',
      label: 'Contacto:',
      type: 'text',
      name: 'contact',
      placeholder: 'Ingrese nombre del contacto',
      value: '',
    },

  ])

  const handleInputChange = (id: string, value: string) => {
    setFormData((prevFormData) =>
      prevFormData.map((item) => (item.id === id ? { ...item, value } : item)),
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formDataToSend = formData.reduce((acc, item) => {
      return { ...acc, [item.name]: item.value }
    }, {})
    console.log(formDataToSend)
    try {
      const endpoint = 'https://test-api-nefw.onrender.com/users'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('User created', data)
      } else {
        console.error('Error', response.statusText)
      }

      // Aquí puedes realizar las acciones que necesites después de enviar los datos
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <BoxModal title="Agregar proveedor">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex p-5">
          {formData.map((item) => (
            <div key={item.id} className="sm:col-span-4">
              <label
                htmlFor={item.id}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {item.label}
              </label>
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
                type="submit"
                className="w-full mt-2 p-2.5 flex-1 text-white bg-[#35E871] rounded-md outline-none"
              >
                Guardar
              </button>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-white bg-[#ff0000] rounded-md outline-none"
                onClick={() => setAddModal(false)}
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
