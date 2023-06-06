import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import DeleteModal from './DeleteModal'
import { EditModal } from './EditModal'
import { Link } from 'react-router-dom'

export interface Column<T> {
  key: keyof T & string
  label: string
  render: (item: T) => React.ReactNode
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  showActions?: boolean
}

const TableSupplier = <T extends Record<string, unknown>>({
  data,
  columns,
  showActions = true,
}: TableProps<T>) => {
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  const handleEdit = (item: T) => {
    setSelectedItem(item)
    setModalEdit(true)
  }

  const handleDelete = (item: T) => {
    setSelectedItem(item)
    setModalDelete(true)
  }

  return (
    <>
      <div className="px-5 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-[#606060] uppercase tracking-wider"
                  key={column.key}
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Productos
              </th>
              {showActions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-[#606060]">
            {data.map((item) => (
              <tr key={item.id as React.Key}>
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {column.key === 'photo' ? (
                      <img
                        src={item.photo as string}
                        alt={item.name as string}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      column.render(item)
                    )}
                  </td>
                ))}
                <td className='px-6 py-4 whitespace-nowrap'>
                  <Link to={`/suplier-list/${item.name}`}>
                  ver
                  </Link>
                </td>
                {showActions && (
                  <td className="px-6 py-4 flex gap-2">
                    <button onClick={() => handleEdit(item)} className="text-[#35E871]">
                      <PencilSquareIcon className="h-6 w-6" />
                      {''}
                    </button>
                    <button onClick={() => handleDelete(item)} className="text-[#FF0000]">
                      <TrashIcon className="h-6 w-6" />
                      {''}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalEdit && <EditModal setModalEdit={setModalEdit} item={selectedItem} />}
      {modalDelete && (
        <DeleteModal onDelete={handleDelete} setModalDelete={setModalDelete} item={selectedItem} />
      )}
    </>
  )
}

export default TableSupplier
