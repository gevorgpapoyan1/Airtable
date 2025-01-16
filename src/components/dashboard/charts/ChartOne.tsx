import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne: React.FC = () => {
  const options = {
    series: [{
      name: 'Diposit',
      data: [178, 130, 122, 178, 57, 145, 147]
    }, {
      name: 'Withdraw',
      data: [91, 49, 98, 138, 91, 91, 126]
    }],
    chart: {
      type: 'bar',
      height: 230
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Sat', 'Son', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry'],
    },
    yaxis: {
      title: {
        show: false
      },
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: false
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: 'true',
      // show: false,
    },
    toolbar: {
      show: false,
    },
    colors: ['#232323', '#396AFF'],
  };

  return (
    <div className="col-span-12 xl:col-span-8">
      <div className='flex flex-col gap-5'>
        <h2 className='text-22 font-semibold text-third'>Weekly Activity</h2>
        <div className="col-span-12 rounded-25 bg-white p-7 xl:col-span-8">
          <ReactApexChart options={options} series={options.series} type="bar" height={230} />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
