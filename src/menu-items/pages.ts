import DashboardIcon from '../assets/icons/sidebar-icons/dashboard-icon.svg';
import TransactionIcon from '../assets/icons/sidebar-icons/transactions-icon.svg';
import AccountsIcon from '../assets/icons/sidebar-icons/account-icon.svg';
import InvestmentsIcon from '../assets/icons/sidebar-icons/investment-icon.svg';
import CreditCardsIcon from '../assets/icons/sidebar-icons/credit-card.svg';
import LoansIcon from '../assets/icons/sidebar-icons/loans-icon.svg';
import ServicesIcon from '../assets/icons/sidebar-icons/services-icon.svg';
import MyPrivilegesIcon from '../assets/icons/sidebar-icons/privileges-icon.svg';
import SettingsIcon from '../assets/icons/sidebar-icons/settings-icon.svg';

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: DashboardIcon
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: TransactionIcon
    },
    {
      id: 'accounts',
      title: 'Accounts',
      type: 'item',
      url: '/accounts',
      icon: AccountsIcon
    },
    {
      id: 'investments',
      title: 'Investments',
      type: 'item',
      url: '/investments',
      icon: InvestmentsIcon
    },
    {
      id: 'credit-card',
      title: 'Credit Cards',
      type: 'item',
      url: '/credit-card',
      icon: CreditCardsIcon
    },
    {
      id: 'loans',
      title: 'Loans',
      type: 'item',
      url: '/loans',
      icon: LoansIcon
    },
    {
      id: 'services',
      title: 'Services',
      type: 'item',
      url: '/services',
      icon: ServicesIcon
    },
    {
      id: 'my-privileges',
      title: 'My Privileges',
      type: 'item',
      url: '/my-privileges',
      icon: MyPrivilegesIcon
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: SettingsIcon
    }
  ]
}

export default pages