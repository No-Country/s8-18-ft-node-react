import { BoxModal } from '../../components/ui'


interface DeleteModalProps<T> {
  setModalDelete: (value: boolean) => void
  item: T
  onDelete: (item: T) => void
}

const DeleteModal = <T extends object>({ setModalDelete, item, onDelete }: DeleteModalProps<T>) => {
  const handleDelete = async () => {
    try {
      await onDelete(item)
      const endpoint = 'https://test-api-nefw.onrender.com/users'
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      if (response.ok) {
        console.log('Usuario eliminado')
        setModalDelete(false)
      } else {
        console.error('Error al eliminar el usuario:', response.statusText)
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error)
    }
  }

  return (
    <BoxModal title="Eliminar cuenta de administrador">
      <div className="p-5">
        <span className="block text-center mb-5 text-sm font-medium leading-6 text-gray-900">
          ¿Estas seguro que deseas eliminar la cuenta?
        </span>
        <div className="mt-2 text-center sm:mx-4 sm:text-left">
          <div className="items-center gap-2 mt-3 sm:flex">
            <button
              type="submit"
              className="w-full mt-2 p-2.5 flex-1 text-white bg-[#35E871] rounded-md outline-none"
              onClick={handleDelete}
            >
              Eliminar
            </button>
            <button
              className="w-full mt-2 p-2.5 flex-1 text-white bg-[#ff0000] rounded-md outline-none"
              onClick={() => setModalDelete(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </BoxModal>
  )
}

export default DeleteModal
