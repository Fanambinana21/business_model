import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import CustomerRelationships from './Pages/CustomerRelationships/CustomerRelationships'
import CustomerSegments from './Pages/CustomerSegments/CustomerSegments'
import KeyActivities from './Pages/KeyActivities/KeyActivities'
import KeyParteners from './Pages/KeyParteners/KeyParteners'
import KeyRessources from './Pages/KeyRessources/KeyRessources'
import ValuePropositions from './Pages/ValuePropositions/ValuePropositions';
import Channels from './Pages/Channels/Channels'
import useStyles from './styles';
import CostStructure from './Pages/CostStructure/CostStructure'
import RevenueStreams from './Pages/RevenueStreams/RevenueStreams'


const Bmc = () => {
  const classes= useStyles();
  return (
    <>
      <div className={classes.title}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4.8} md={2}>
            <Paper className={classes.paper}>
              <KeyParteners/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4.8} md={3}>
            <Paper className={classes.paper}>
              <KeyActivities/>
            </Paper>
            <Paper className={classes.paper}>
              <KeyRessources/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4.8} md={2}>
            <Paper className={classes.paper}>
              <ValuePropositions/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4.8} md={3}>
            <Paper className={classes.paper}>
              <CustomerRelationships/>
            </Paper>
            <Paper className={classes.paper}>
              <Channels/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4.8} md={2}>
            <Paper className={classes.paper}>
              <CustomerSegments/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <CostStructure/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <RevenueStreams/>
            </Paper>
          </Grid>
         

          
        </Grid>
      </div>
    </>
  )
}

export default Bmc
