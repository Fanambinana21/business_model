import React, {useState} from 'react'
import {Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core'
import { Add } from '@material-ui/icons'

const RevenueStreams = () => {
  const [channels, setChannels] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
  return (
    <>
    <Box sx={{height:'50%'}}>
      <Typography variant='h7'>
        Structures des coûts
      </Typography>
      <div style={{ width: '100%' }}>
      
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="none"
        css={{ height: 30 }}
        textAlign="center"
      >
        <Box
        textAlign="center"
        >
          
        </Box>
        
             
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="none"
        css={{ height: 30 }}
        textAlign="center"
      >
        <Box
        textAlign="center"
        >
          
        </Box>
        
             
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="none"
        css={{ height: 20 }}
        textAlign="center"
      >
        <Box
        textAlign="center"
        >
          
        </Box>
        
             
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="none"
        css={{ height: 20 }}
        textAlign="center"
      >
        <Box
        textAlign="center"
        >
          
        </Box>
        
             
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="none"
        css={{ height: 20 }}
        textAlign="center"
      >
        <Box
        textAlign="center"
        >
          
        </Box>
        
             
      </Box>
      
    </div>
        
       <Button
       variant="contained"
       color="primary"
       onClick={handleClickOpen} >
       <Add/>
       </Button>
       <Dialog open={open} onClose={handleClose} aria-labelledby="Business model: Canaux">
         <DialogTitle id="form-dialog-title">Structure des coûts</DialogTitle>
         <DialogContent>
           <DialogContentText>
             Question 1
           </DialogContentText>
           <TextField 
           autoFocus
           margin="dense"
           name="channels"
           label='Canaux de distribution' 
           maxRows={2}
           fullWidth
           multiline
           onChange={e=> setChannels(e.target.value)}/>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color='primary'>
             Fermer
           </Button>
           <Button onClick={handleClose} color='primary'>
             Ajouter
           </Button>
         </DialogActions>
       </Dialog>
         
        
       
         
    </Box>
   </>
  )
}

export default RevenueStreams
