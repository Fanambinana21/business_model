import React from 'react';
import Bmc from './components/Bmc/Bmc';
import Header from './components/Header/Header';
import { CssBaseline } from '@material-ui/core';
 


const App = () => {
  return (
    <>
    <CssBaseline>
        
        <Header/>
        <Bmc/>


    </CssBaseline>
      
    </>
  )
}

export default App
