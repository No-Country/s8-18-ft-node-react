import { FC, useEffect, useState } from 'react'
import TableSupplier, {Column} from './TableSupplier'
import { ArrowsPointingOutIcon, PlusIcon } from '@heroicons/react/20/solid';
import {AddModal} from './AddModal';

interface User {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  contact: string;
  entry_date: string;
  update_date: string;
  [key: string]: unknown;
}

const columns: Column<User>[] = [
  { key: 'id', label: 'ID', render: (user: User) => user.id },
  { key: 'name', label: 'Nombre del proveedor', render: (user: User) => user.name },
  { key: 'address', label: 'Dirección', render: (user: User) => user.address },
  { key: 'city', label: 'Ciudad', render: (user: User) => user.city },
  { key: 'country', label: 'Pais', render: (user: User) => user.country },
  { key: 'phone', label: 'Teléfono', render: (user: User) => user.phone },
  { key: 'email', label: 'Email', render: (user: User) => user.email },
  { key: 'contact', label: 'Contacto', render: (user: User) => user.contact },
  { key: 'entry_date', label: 'Fecha de inicio', render: (user: User) => user.entry_date },
  { key: 'update_date', label: 'Fecha de actualización', render: (user: User) => user.update_date }
];

const SupplierList: FC = () => {

  const [addModal, setAddModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api-crm-cuaz.onrender.com/supplier-list');
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
        <p className="font-semibold text-[#606060]">Cuentas de proveedores</p>
        <ArrowsPointingOutIcon className="h-6 w-6" />
      </div>
        <button onClick={() => { setAddModal(true); }} className="bg-[#234B99] flex py-2 px-5 my-5 ml-5 rounded-md text-gray-50">
        <PlusIcon className="w-6 mr-2" />
        Añadir cuenta
      </button> 
        {addModal && <AddModal setAddModal={setAddModal} />}
      <TableSupplier<User> data={users} columns={columns} onEdit={handleEdit} onDelete={handleDelete}  showActions={true} />
    </section>
  </>
  )
}

export default SupplierList;
