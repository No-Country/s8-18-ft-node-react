import { FC, useEffect, useState } from 'react'
import Table, { Column } from '../../../components/ui/Table'
import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid'

interface User {
  id: number
  position: string
  name: string
  lastname: string
  action: string
  details: string
  date: string
}

const columns: Column<User>[] = [
  { key: 'position', label: 'Cargo', render: (user: User) => user.position },
  { key: 'name', label: 'Nombre', render: (user: User) => `${user.name} ${user.lastname}` },
  { key: 'action', label: 'Acción', render: (user: User) => user.action },
  { key: 'details', label: 'Detalles', render: (user: User) => user.details },
  { key: 'date', label: 'Fecha', render: (user: User) => user.date },
]

export const AuditList: FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api-crm-cuaz.onrender.com/list')
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
