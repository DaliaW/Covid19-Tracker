import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(241, 0, 0, 0.678)', 'rgba(9, 255, 0, 0.678)', 'rgba(20, 20, 20, 0.678)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : "Not fetched yet"
      );

    const lineChart =(
        //if it's available then data is available
        dailyData[0]
        ? (<Line
        //object
         data={
             {
                 //mapping
                 labels: dailyData.map(({ date }) => date),
                 datasets: [{
                     data: dailyData.map(({ confirmed }) => confirmed),
                     label: 'Infected',
                     borderColor: 'red',
                     fill: true,
                     //

                 },{
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'black',
                    fill: true,
                    backgroundColor: '#81797c',

                 }],  //array of objects
             }
         }
         //if not then it's not available yet
         />) : "Not fetched Yet"

    )



    return(
        
        <div className={styles.container}>
            {country? barChart : lineChart}

        </div>
    )
}
export default Chart;