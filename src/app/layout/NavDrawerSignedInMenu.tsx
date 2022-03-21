import { AccountBox, ShoppingBag, Logout } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../features/account/accountSlice';
import { clearBasket } from '../../features/basket/basketSlice';
import { User } from '../models/user';
import { useAppDispatch } from '../store/configureStore'

interface Props{
    user: User | any;
}

const NavDrawerSignedInMenu = ({user}: Props) => {
    const dispatch = useAppDispatch();    

  return (
    <>
        <Typography variant='h3' textAlign='center'>
          {user?.email?.split('@')[0].toUpperCase()}
        </Typography>
        <List>
          <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem component={NavLink} to='/orders'>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingBag />
                </ListItemIcon>
                <ListItemText primary='My Orders' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=> {
            dispatch(signOut());
            dispatch(clearBasket());
          }}>
                <ListItemIcon>
                    <Logout />
                </ListItemIcon>
                <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        </List>
      </>
  )
}

export default NavDrawerSignedInMenu