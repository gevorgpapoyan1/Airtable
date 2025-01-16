import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartFour = () => {
  const state = ({
    series: [
      {
        name: 'Balance History',
        data: [100, 250, 450, 750, 200, 580, 650],
      }
    ],
    options: {
      chart: {
        height: 200,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        labels: {
          style: {
            colors: '#8B98A9',
            fontSize: '12px',
            fontWeight: 500,
          }
        },
      },
      stroke: {
        width: 3,
        curve: 'smooth',
        colors: ['#1814F3'],
      },
      markers: {
        size: 0,
        colors: ['#ffffff'],
        strokeColors: '#2D60FF',
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: 'light',
        marker: {
          show: true,
        },
        x: {
          format: 'MMM',
        },
      },
      // fill: {
      //   type: 'gradient',
      //   gradient: {
      //     shadeIntensity: 0.3,
      //     opacityFrom: 0.4,
      //     opacityTo: 0.1,
      //   },
      // },
      yaxis: {
        labels: {
          style: {
            colors: '#8B98A9',
            fontSize: '12px',
            fontWeight: 500,
          }
        }
      },
    },
  });

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex flex-col gap-5">
        <h2 className="text-22 font-semibold text-third">Balance History</h2>
        <div className="col-span-12 rounded-25 bg-white p-7 xl:col-span-7">
          <ReactApexChart options={state.options} series={state.series} type="line" height={200} />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
