import React, { FC, useState } from 'react'
import { BoxModal } from '../../components/ui'

interface FormData {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
}

export const AddModal: FC = ({ setAddModal }) => {

  const [formData, setFormData] = useState<FormData[]>([
    { id: "name", label: "Nombre:", type: "text", name: "name", placeholder: "Ingrese un nombre", value: "" },
    { id: "lastname", label: "Apellido:", type: "text", name: "lastname", placeholder: "Ingrese un apellido", value: "" },
    { id: "email", label: "Correo electrónico:", type: "email", name: "email", placeholder: "Ingrese un correo electrónico", value: "" },
    { id: "pasword", label: "Contraseña:", type: "text", name: "password", placeholder: "Ingrese una contraseña", value: "" },
    { id: "date", label: "Fecha:", type: "date", name: "date", placeholder: "Fecha", value: "" },
  ]);

  const handleInputChange = (id: string, value: string) => {
    setFormData((prevFormData) => prevFormData.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = formData.reduce((acc, item) => {
      return { ...acc, [item.name]: item.value };
    }, {})
    console.log(formDataToSend);
    try {
      const endpoint = 'https://test-api-nefw.onrender.com/users'; 
      const response = await fetch(endpoint, {
       method: 'POST',
        headers: {
           'Content-Type': 'application/json',
       },
        body: JSON.stringify(formDataToSend),
      });
  
     if (response.ok) {
       const data = await response.json();
       console.log('User created', data);
     } else {
       console.error('Error', response.statusText);
      }
  
      // Aquí puedes realizar las acciones que necesites después de enviar los datos
    } catch (error) {
       console.error('Error:', error);
    }
  }

  return (
    <>
      <BoxModal title='Agregar cuenta de administrador'>
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
          <div className="sm:col-span-4">
            <label htmlFor='image' className="block mt-1 text-sm font-medium leading-6 text-gray-900">
              Subir foto
            </label>
            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-gray-900/25 px-6 py-6">
              <div className="text-center">
                <div className="flex text-sm leading-6 text-gray-600">
                  <label
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Sube una foto</span>
                    <input id="image-upload" name="image-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF máximo 5MB</p>
              </div>
            </div>
          </div>

          <div className="mt-2 text-center sm:mx-4 sm:text-left">
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                type='submit'
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
