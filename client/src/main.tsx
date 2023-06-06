import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { HomeSuperadmin } from './pages/superadmin/HomeSuperadmin';
import { AdminAccount } from './pages/superadmin/admin/AdminAccount';
import { SellerAccount } from './pages/superadmin/seller/SellerAccount';
import { AuditPage } from './pages/superadmin/audit/AuditPage';
import { Settings } from './pages/superadmin/settings/Settings';
import { HomeAdmin } from './pages/admin/HomeAdmin';
import { Home } from './pages/Home';

const role = true;

const routes = [
  {
    path: '/',
    element: <Home />,
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
  }

];

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
