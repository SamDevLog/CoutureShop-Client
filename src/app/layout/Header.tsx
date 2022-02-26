import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, List, ListItem, IconButton, Badge, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

interface Props{
  themeSelectorHandler: ()=> void;
  darkMode: boolean
}

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]
const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = {color: 'inherit', textDecoration: 'none', typography: 'h6', '&:hover':{ color: 'grey.500' }, '&.active': {color: 'text.secondary'}};

export default function Header({themeSelectorHandler, darkMode}: Props) {
  return (
    <AppBar sx={{ mb: 4}} position="static">
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box display='flex' alignItems='center'>
            <Typography variant='h6' component={NavLink} to='/' exact sx={navStyles} >
                Mustapha-Mode
            </Typography>
            <Switch checked={darkMode} onChange={themeSelectorHandler} />
          </Box>
            
            <List sx={{display: 'flex'}}>
              {midLinks.map(({title, path})=>(
                <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>

            <Box display='flex' alignItems='center'>
              <IconButton size='large' sx={navStyles}>
                <Badge badgeContent={4} color='secondary'>
                  <ShoppingCart/>
                </Badge>
              </IconButton>
              <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path})=>(
                  <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                    {title.toUpperCase()}
                  </ListItem>
                ))}
              </List>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
