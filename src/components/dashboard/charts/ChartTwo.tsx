import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTwo = () => {
  const series = [30, 15, 25, 30]
  const labels = ['Entertainment', 'Bill Expense', 'Investment', 'Others'];

  const options = {
    series,
    chart: {
      width: '100%',
      height: '280',
      type: 'pie',
    },
    colors: ['#343C6A', '#FC7900', '#396AFF', '#232323'],
    labels,
    stroke: {
      width: 8,
      color: '#ffffff',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      show: false
    }
  };

  return (
    <div className="col-span-12 xl:col-span-4">
      <div className="flex flex-col gap-5">
        <h2 className="text-22 font-semibold text-third">Expense Statistics</h2>
        <div className="col-span-12 rounded-25 bg-white p-7 xl:col-span-7">
          <ReactApexChart options={options } series={series} type="pie" height={260} />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
