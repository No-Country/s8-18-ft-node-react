import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'

export interface Column<T> {
  key: keyof T & string
  label: string
  render: (item: T) => React.ReactNode
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  showActions?: boolean
}

const Table2 = <T extends Record<string, unknown>>({
  data,
  columns,
  onEdit,
  onDelete,
  showActions = true,
}: TableProps<T>) => {
  return (
    <>
      <div className="px-5 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  key={column.key}
                >
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
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
                {showActions && onEdit && onDelete && (
                  <td className="px-6 py-4 flex gap-2">
                    <button onClick={() => onEdit(item)} className="text-gray-500">
                      <PencilSquareIcon className="h-6 w-6" />
                      {''}
                    </button>
                    <button onClick={() => onDelete(item)} className="text-gray-500">
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
    </>
  )
}

export default Table2