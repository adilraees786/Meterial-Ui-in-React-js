import React from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const DramerCom = () => {
  return (
   <React.Fragment>
    <Drawer open={true}>
<List>
    <ListItemButton>
        <ListItemIcon>
            <ListItemText>Login</ListItemText>
        </ListItemIcon>
    </ListItemButton>
</List>
    </Drawer>

   </React.Fragment>
  )
}

export default DramerCom;