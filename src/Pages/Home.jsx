import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Home = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#03DAC6'}}>
        <Toolbar>


        {/* <Typography > SHOPPING </Typography> */}
        <ShoppingCartCheckoutIcon/>
        <Tabs textColor='inherit'>
 <Tab label="Blogs"/>
 <Tab label="Contact"/>
 <Tab label="Home"/>
 <Tab label="About"/>
 <Tab label="Service"/>
        </Tabs>
        <Button sx={{marginLeft: "auto"}} variant="contained">
          Login{" "}
          </Button>
        <Button sx={{marginLeft: "10px"}} variant="contained">
          SignUp{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>


  )
}

export default Home





