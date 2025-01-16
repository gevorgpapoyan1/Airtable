import DefaultLayout from '../layout/DefaultLayout.tsx';

import { DashboardPage } from '../pages/dashboard';
import { SettingsPage } from '../pages/settings'
import { MyCardsPage } from '../pages/my-cards'

import PageTitle from '../components/PageTitle.tsx';

const MainRoutes = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: 'dashboard',
      element: <>
        <PageTitle title="Dashboard" />
        <DashboardPage />
      </>
    },
    {
      path: 'transactions',
      element: <>
        <PageTitle title="Transactions" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'accounts',
      element: <>
        <PageTitle title="Accounts" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'investments',
      element: <>
        <PageTitle title="Investments" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'credit-card',
      element: <>
        <PageTitle title="Credit Cards" />
        <MyCardsPage />
      </>
    },
    {
      path: 'loans',
      element: <>
        <PageTitle title="Loans" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'services',
      element: <>
        <PageTitle title="Services" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'my-privileges',
      element: <>
        <PageTitle title="My Privileges" />
        Page not ready. Please check back later
      </>
    },
    {
      path: 'settings',
      element: <>
        <PageTitle title="Settings" />
        <SettingsPage />
      </>
    },
  ]
}

export default MainRoutes