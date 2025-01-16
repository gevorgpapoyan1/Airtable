import React from 'react';
import ChartOne from '../dashboard/charts/ChartOne.tsx';
import ChartTwo from '../dashboard/charts/ChartTwo.tsx';
import ChartThree from '../dashboard/charts/ChartThree.tsx';
import ChartFour from '../dashboard/charts/ChartFour.tsx';
import RecentTransactions from './resent-transactions';
import MyCards from '../dashboard/cards';

const DashboardComponent = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-4 2xl:gap-7.5">
        <div className="col-span-5 h-full">
          <MyCards />
        </div>

        <div className="col-span-3 flex flex-col gap-5">
          <h2 className="text-22 font-semibold text-third">Recent Transaction</h2>
          <RecentTransactions />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartThree />
        <ChartFour />
      </div>
    </>
  );
};

export default DashboardComponent;