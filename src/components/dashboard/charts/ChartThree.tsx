import React from 'react';
import QuickTransfer from './quick-transfer';

const ChartOne: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-5">
        <div className='flex flex-col gap-5'>
          <h2 className='text-22 font-semibold text-third'>Quick Transfer</h2>
          <QuickTransfer />
        </div>
    </div>
   
  );
};

export default ChartOne;
