import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { HomeSuperadmin } from './pages/superadmin/HomeSuperadmin';
import { AdminAccount } from './pages/superadmin/admin/AdminAccount';
import { SellerAccount } from './pages/superadmin/seller/SellerAccount';
import { AuditPage } from './pages/superadmin/audit/AuditPage';
import { Settings } from './pages/superadmin/settings/Settings';
import { HomeAdmin } from './pages/admin/HomeAdmin';
import { ProductPage } from './pages/admin/products/ProductPage';
import { SupplierAccount } from './pages/admin/suppliers/SupplierAccount';
import { SupplierProducts } from './pages/admin/supplier-products/SupplierProducts';

const role = false;

const routes = [
  {
    path: '/',
    element: role ? <HomeSuperadmin /> : <HomeAdmin />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: 'admin-accounts',
    element: <AdminAccount />
  },
  {
    path: 'seller-accounts',
    element: <SellerAccount />
  },
  {
    path: 'audit-logs',
    element: <AuditPage />
  },
  {
    path: 'notifications',
    element: <Settings />
  },
  {
    path: 'products-list',
    element: <ProductPage />
  },
  {
    path: 'supplier-list',
    element: <SupplierAccount />
  },
  {
    path: "supplier-list/",
    element: <SupplierProducts />
  }

];

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
