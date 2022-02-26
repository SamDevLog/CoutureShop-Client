import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';

interface Props{
  themeSelectorHandler: ()=> void;
  darkMode: boolean
}

export default function Header({themeSelectorHandler, darkMode}: Props) {
  return (
    <AppBar sx={{ mb: 4}} position="static">
        <Toolbar>
            <Typography variant='h6'>
                Mustapha-Mode
            </Typography>
            <Switch checked={darkMode} onChange={themeSelectorHandler} />
        </Toolbar>
    </AppBar>
  )
}
