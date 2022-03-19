import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, List, ListItem, IconButton, Badge, Box, styled, Menu, MenuItem, Tooltip } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { AccountCircle, MenuSharp, ShoppingCart } from '@mui/icons-material';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';

interface Props{
  themeSelectorHandler: ()=> void;
  darkMode: boolean
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 26,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 24,
    height: 24,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'errors', path: '/errors'},
  {title: 'contact', path: '/contact'},
]
const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = {color: 'inherit', textDecoration: 'none', typography: 'h6', '&:hover':{ color: 'grey.500' }, '&.active': {color: 'text.secondary'}};

export default function Header({themeSelectorHandler, darkMode}: Props) {

  const {basket} = useAppSelector(state => state.basket);
  const {user} = useAppSelector(state=>state.account);

  const itemCount = basket?.items.reduce((sum, item)=>{
    return sum + item.quantity;
  }, 0);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box display='flex' alignItems='center'>
            <Typography variant='h5' component={NavLink} to='/' exact sx={navStyles} >
                SDL-Store
            </Typography>
            <MaterialUISwitch size='small' sx={{ m: 1 }} checked={darkMode} onChange={themeSelectorHandler} />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, justifyContent:'center', alignItems:'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuSharp/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
              keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'left'}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' }}}
            >
              {midLinks.map(({title, path}) => (
                <MenuItem component={NavLink} to={path} key={path} sx={navStyles} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{title.toUpperCase()}</Typography>
                </MenuItem>
              ))}
              {user && user.roles?.includes('Admin') && 
              <MenuItem component={NavLink} to='/inventory' sx={navStyles}>
                INVENTORY
              </MenuItem>
            }
            </Menu>
          </Box>
          <List sx={{display: { xs: 'none', md: 'flex' }}}>
            {midLinks.map(({title, path})=>(
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
            {user && user.roles?.includes('Admin') && 
              <ListItem component={NavLink} to='/inventory' sx={navStyles}>
                INVENTORY
              </ListItem>
            }
          </List>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton component={Link} to='/basket' size='large' sx={navStyles}>
              <Badge badgeContent={itemCount} color='secondary'>
                <ShoppingCart/>
              </Badge>
            </IconButton>
            {user ? (
              <SignedInMenu />
            ) : (
              <>
                <Tooltip title="Open Account Links">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{vertical: 'top',horizontal: 'right'}}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {rightLinks.map(({title, path}) => (
                  <MenuItem component={NavLink} to={path} key={path} sx={navStyles} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{title.toUpperCase()}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
            
            )
            }
            
          </Box>

          {/* <Box display='flex' alignItems='center'>
          <List sx={{display: 'flex'}}>
            {rightLinks.map(({title, path})=>(
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
            </List>
            
          </Box> */}
        </Toolbar>
    </AppBar>
  )
}
