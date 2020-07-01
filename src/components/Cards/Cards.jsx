import React from 'react';
import { Card, CardContent, Typography, Grid, hexToRgb } from '@material-ui/core';

import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
   if(!confirmed){
       return 'Loading.......'
   }
    return(
        <div className = {styles.container}>
            <Grid container spacing= {3} justify="center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <img src="https://cdn1.iconfinder.com/data/icons/50-set-korona-virus/512/028-infected-512.png" alt="infected" ></img>
                           <h2 >
                               INFECTED</h2> 
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            Number of active cases of COVID-19
                        </Typography>

                        <Typography variant = "h5">
                           <CountUp
                           start = {0}
                           end = {confirmed.value}
                           duration = {2.5}
                           separator = ","
                           />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>
                            May all infected people heal up soon..
                        </Typography>





                        
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <img src="https://cdn0.iconfinder.com/data/icons/covid-19-37/512/Recovered-recuperate-covid19-convalescence-rehabilitation-restitution-restoration-512.png" alt="recovered" ></img>
                            <h2 >
                            
                                RECOVERED</h2>
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            Number of recoveries from COVID-19
                        </Typography>

                        <Typography variant = "h5">
                           <CountUp
                           start = {0}
                           end = {recovered.value}
                           duration = {2.5}
                           separator = ","
                           />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>
                            May you all never catch it again
                        </Typography>







                        
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <img src="https://cdn0.iconfinder.com/data/icons/corona-virus-flat-style-1/64/22.corona_virus-512.png" alt="deaths" ></img>
                          <h2>
                          
                                DEATHS </h2>
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                        Number of deaths by COVID-19
                        </Typography>

                        <Typography variant = "h5">
                           <CountUp
                           start = {0}
                           end = {deaths.value}
                           duration = {2.5}
                           separator = ","
                           />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>
                            May their soul rest in peace
                        </Typography>



                        
                    </CardContent>
                    
                </Grid>
                <Typography color="textSecondary" >
                          <h5> last updated: {new Date (lastUpdate).toDateString()}
                           <div>{new Date (lastUpdate).toTimeString()}</div>
                           </h5>

                        </Typography>

            </Grid>
            
        </div>
    )
}
export default Cards;