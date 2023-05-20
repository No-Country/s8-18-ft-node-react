import { FC } from 'react';
import {
  ArrowsPointingOutIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

interface User {
  id: number
  photo: string
  name: string
  email: string
  password: string
  date: string
  status: string
}

const generateRandomUsers = (count: number): User[] => {
  const users: User[] = [];
  for (let i = 1; i <= count; i++) {
    const user: User = {
      id: i,
      photo: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      password: '********',
      date: new Date().toLocaleDateString(),
      status: Math.random() < 0.5 ? 'Active' : 'Inactive',
    }
    users.push(user)
  }
  return users
};

const AdminTable: FC = () => {
  const users = generateRandomUsers(4)

  return (
    <>
      <section className="min-w-full pb-5 shadow-lg">
        <div className="bg-gray-100 flex justify-between py-2 px-5">
          <p className="font-semibold">Cuentas de administradores</p>
          <ArrowsPointingOutIcon className="h-6 w-6" />
        </div>
        <button className="bg-gray-100 flex py-2 px-5 my-5 ml-5 rounded-md">
          <PlusIcon className="w-6 mr-2" />
          Añadir cuenta
        </button>
        <div className="px-5 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Foto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contraseña
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-gray-500">
                      <PencilSquareIcon className="h-6 w-6" />
                    </button>
                    <button className="text-gray-500">
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default AdminTable;
