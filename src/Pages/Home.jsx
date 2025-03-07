import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Home = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: 'black'}}>
        <Toolbar>


        {/* <Typography > SHOPPING </Typography> */}
        <ShoppingCartCheckoutIcon/>
        </Toolbar>
      </AppBar>
    </React.Fragment>


  )
}

export default Home

