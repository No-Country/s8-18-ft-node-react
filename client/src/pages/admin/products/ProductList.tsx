import { FC, useEffect, useState } from 'react'
import Table, { Column } from '../../../components/ui/Table'
import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid'

interface User {
  id: number
  name: string
  description: string
  brand: string
  price: number
  quantity: number
  category: string
  supplier: string
  entry_date: string
  update_date: string
  date: string
  status: string
  image: string
}

const columns: Column<User>[] = [
  { key: 'id', label: 'ID', render: (user: User) => user.id },
  { key: 'name', label: 'Nombre del producto', render: (user: User) => user.name },
  { key: 'description', label: 'Descripción', render: (user: User) => user.description },
  { key: 'brand', label: 'Marca', render: (user: User) => user.brand },
  { key: 'price', label: 'Precio', render: (user: User) => `${user.price} $` },
  { key: 'quantity', label: 'Cantidad', render: (user: User) => user.quantity },
  { key: 'category', label: 'Categoria', render: (user: User) => user.category },
  { key: 'supplier', label: 'Proveedor', render: (user: User) => user.supplier },
  { key: 'update_date', label: 'Fecha de ingreso', render: (user: User) => user.entry_date },
  { key: 'entry_date', label: 'Fecha fecha de actualización', render: (user: User) => user.update_date },
  { key: 'status', label: 'Estado', render: (user: User) => <span style={{ color: user.status === 'Nuevo' ? '#35E871' : '#FF0000' }}>
  {user.status}
  </span>
  },
  { key: 'photo', label: 'Imagen', render: (user: User) => user.image },
]

export const ProductList: FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api-crm-cuaz.onrender.com/product-list')
        if (!response.ok) {
          throw new Error('Error en la solicitud')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error al obtener los usuarios', error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <>
      <section className="min-w-full pb-5 shadow-lg rounded-lg">
        <div className="bg-[#ececec] flex justify-between py-2 px-5 rounded-t-lg mb-5">
          <p className="font-semibold text-[#606060]">Auditoria</p>
          <ArrowsPointingOutIcon className="h-6 w-6" />
        </div>
        <Table<User>
          data={users}
          columns={columns}
          showActions={false}
        />
      </section>
    </>
  )
}