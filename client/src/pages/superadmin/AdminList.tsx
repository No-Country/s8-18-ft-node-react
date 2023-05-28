import { FC, useEffect, useState } from 'react'
import Table, {Column} from '../../components/ui/Table'
import { ArrowsPointingOutIcon, PlusIcon } from '@heroicons/react/20/solid';
import {AddModal} from './AddModal';

interface User {
  id: number;
  photo: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  date: string;
  status: string;
  [key: string]: unknown;
}

const columns: Column<User>[] = [
  { key: 'photo', label: 'Foto', render: (user: User) => user.id },
  { key: 'name', label: 'Nombre', render: (user: User) => `${user.name} ${user.lastname}` },
  { key: 'email', label: 'Email', render: (user: User) => user.email },
  { key: 'password', label: 'Contraseña', render: (user: User) => user.password },
  { key: 'date', label: 'Fecha', render: (user: User) => user.date },
  { key: 'status', label: 'Estado', render: (user: User) => <span style={{ color: user.status === 'Activo' ? '#35E871' : '#FF0000' }}>
  {user.status}
</span> },
];

const AdminList: FC = () => {

  const [addModal, setAddModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://test-api-nefw.onrender.com/users');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (item: User) => {
    onEdit(item);
  };
  
  const handleDelete = (item: User) => {
    onDelete(item);
  };

  return (
    <>
    <section className="min-w-full pb-5 shadow-lg rounded-lg">
      <div className="bg-[#ececec] flex justify-between py-2 px-5 rounded-t-lg">
        <p className="font-semibold text-[#606060]">Cuentas de administradores</p>
        <ArrowsPointingOutIcon className="h-6 w-6" />
      </div>
        <button onClick={() => { setAddModal(true); }} className="bg-[#234B99] flex py-2 px-5 my-5 ml-5 rounded-md text-gray-50">
        <PlusIcon className="w-6 mr-2" />
        Añadir cuenta
      </button> 
        {addModal && <AddModal setAddModal={setAddModal} />}
      <Table<User> data={users} columns={columns} onEdit={handleEdit} onDelete={handleDelete}  showActions={true} />
    </section>
  </>
  )
}

export default AdminList;
