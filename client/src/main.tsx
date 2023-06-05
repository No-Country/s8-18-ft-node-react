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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeSuperadmin />,
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
  }

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
