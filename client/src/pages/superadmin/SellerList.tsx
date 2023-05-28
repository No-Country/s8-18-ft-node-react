import { FC } from 'react'
import Table, {Column} from '../../components/ui/Table'
import { ArrowsPointingOutIcon, PlusIcon } from '@heroicons/react/20/solid';

interface User {
  id: number;
  photo: string;
  name: string;
  email: string;
  password: string;
  date: string;
  status: string;
  [key: string]: unknown;
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

const columns: Column<User>[] = [
  { key: 'photo', label: 'Foto', render: (user: User) => user.id },
  { key: 'name', label: 'Nombre', render: (user: User) => user.name },
  { key: 'email', label: 'Email', render: (user: User) => user.email },
  { key: 'password', label: 'Contraseña', render: (user: User) => user.password },
  { key: 'date', label: 'Fecha', render: (user: User) => user.date },
  { key: 'status', label: 'Estado', render: (user: User) => user.status },
];

const AdminList: FC = () => {

  const users = generateRandomUsers(4)

  return (
    <>
    <section className="min-w-full pb-5 shadow-lg">
      <div className="bg-[ECECEC] flex justify-between py-2 px-5">
        <p className="font-semibold">Cuentas de administradores</p>
        <ArrowsPointingOutIcon className="h-6 w-6" />
      </div>
      <button className="bg-[234B99] flex py-2 px-5 my-5 ml-5 rounded-md">
        <PlusIcon className="w-6 mr-2" />
        Añadir cuenta
      </button>
      <Table<User> data={users} columns={columns} showActions={true} />
    </section>
  </>
  )
}

export default AdminList;