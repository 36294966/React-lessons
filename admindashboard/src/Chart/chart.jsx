import React from 'react';
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  return (
    <div>
      <Bar className='m2 lg:p3'
        data= {{
          labels:['Daily Earning', 'Daily Spend', 'Savings'],
          datasets:[
            {
              label: "Count",
              data: [5000, 2000, 600],
              backgroundColor:[
                "Green",
                "Orange",
                "Red"

              ]
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;

