import { BoxCard } from './BoxCard'
import {
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import { BoxStats } from '../../../components/ui'
import { SalesTrend } from './SalesTrend'
import { SalesPerProduct } from './SalesPerProduct'
import { ProductProfitMargin } from './ProductProfitMargin'
import { ReplenishmentTime } from './ReplenishmentTime'

const Dashboard = () => {
  return (
    <div className='my-10'>
      <div className="grid grid-cols-4 gap-5 mb-5">
        <BoxCard
          icon={<UserPlusIcon className="w-20" />}
          title="Vendedores activos"
          cont="10"
          className="from-[#24DFEB] to-[#234B99]"
        />
        <BoxCard
          icon={<UsersIcon className="w-20" />}
          title="Administradores activos"
          cont="10"
          className="from-[#8464C9] to-[#24DFEB]"
        />
        <BoxCard
          icon={<CurrencyDollarIcon className="w-20" />}
          title="Total ingresos"
          cont="$100"
          className="from-[#24DFEB] to-[#8464C9]"
        />
        <BoxCard
          icon={<ClipboardDocumentListIcon className="w-20" />}
          title="Total stock"
          cont="100"
          className="from-[#234B99] to-[#24DFEB]"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <BoxStats title="Tendencia de ventas">
          <div className="my-5">
            <SalesTrend />
          </div>
        </BoxStats>
        <BoxStats title="Tiempo de reposición">
          <div className="my-5">
            <ReplenishmentTime />
          </div>
        </BoxStats>
        <BoxStats title="Margen de beneficio del producto">
          <div className="my-5">
            <ProductProfitMargin />
          </div>
        </BoxStats>
        <BoxStats title="Ventas por producto">
          <div className="my-5">
            <SalesPerProduct />
          </div>
        </BoxStats>
      </div>
    </div>
  )
}

export default Dashboard
