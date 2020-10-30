import React  from 'react'; 
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';  
import cx from 'classnames';

function Cards({data:{ confirmed, recovered, deaths, lastUpdate }} ) {
   if(!confirmed)
   {
       return  (
           <div>loading</div>
       );
   }
   else  
   {
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                        <CountUp duration={5} end={confirmed.value} separator="," />
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    </Typography>
                 
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                    <CountUp duration={5} end={recovered.value} separator="," />
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    
                    <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                    <CountUp duration={5} end={deaths.value} separator="," />
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    </Typography>
                     
                    <Typography variant="body2">Number of death caused by  COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
    )
    }
}

export default Cards
