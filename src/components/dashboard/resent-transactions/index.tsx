import DepositCardIcon from '../../../assets/icons/cards/recent-transactions/deposit-card.svg'; 
import DepositPaypalIcon from '../../../assets/icons/cards/recent-transactions/deposit-paypal.svg'; 
import DepositWilsonIcon from '../../../assets/icons/cards/recent-transactions/deposit-wilson.svg'; 

const transactions = [
  {
    id: 1,
    icon: <img src={DepositCardIcon as string} alt="Deposit Card" className="w-8 h-8" />,
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "text-danger",
    bgColor: "bg-[#FFF5D9]"
  },
  {
    id: 2,
    icon: <img src={DepositPaypalIcon as string} alt="Deposit Card" className="w-8 h-8" />,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "text-success",
    bgColor: "bg-[#E7EDFF]"
  },
  {
    id: 3,
    icon: <img src={DepositWilsonIcon as string} alt="Deposit Card" className="w-8 h-8" />,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "text-success",
    bgColor: "bg-[#DCFAF8]"
  },
];

const Transaction = ({ key, transaction }) => (
  <div key={key} className="flex justify-between w-full items-center">
    <div className="flex items-center gap-4">
      <div className={`${transaction.bgColor} w-[55px] h-[55px] flex justify-center items-center rounded-full`}>{transaction.icon}</div>
      <div>
        <div className="font-semibold">{transaction.title}</div>
        <div className="text-sm text-gray-500">{transaction.date}</div>
      </div>
    </div>
    <div className={`font-semibold ${transaction.amountColor}`}>{transaction.amount}</div>
  </div>
);

const RecentTransactions = () => (
    <div className="flex items-center flex-col gap-[10px] justify-between rounded-[25px] border border-stroke bg-white p-[25px]">
        {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ))}
    </div>
);

export default RecentTransactions;
