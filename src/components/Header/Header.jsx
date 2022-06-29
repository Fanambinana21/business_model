import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './styles'

import Menu from '@material-ui/icons/Menu'


const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
    <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
            SMC
        </Typography>
        <Box display="flex">
            <Typography variant="h6" className={classes.title}>
                Business Model Canvas
            </Typography>
         
           <div className={classes.menu}>
                <div className={classes.menuIcon}>
                    <Menu/>
                </div>
                    
            </div>
         
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Header
