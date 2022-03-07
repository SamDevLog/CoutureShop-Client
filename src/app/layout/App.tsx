
import Catalog from '../../features/catalog/Catalog';
import './App.css';
import Header from './Header';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import BasketPage from '../../features/basket/BasketPage';
import LoadingComponent from './LoadingComponent';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import { useAppDispatch } from '../store/configureStore';
import { fetchBasketAsync } from '../../features/basket/basketSlice';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import { fetchCurrentUser } from '../../features/account/accountSlice';
import PrivateRoute from './PrivateRoute';
import Orders from '../../features/orders/Orders';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const initApp = useCallback( async ()=>{
    try{
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    }catch(error){
      console.log(error);
    }
  }, [dispatch]);

  useEffect(()=>{
    initApp().then(()=>{
      setLoading(false)
    })
  }, [initApp])

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  const setThemeHandler = ()=>{
    setDarkMode((prevState)=>
      !prevState
    );
  }

  if(loading) return <LoadingComponent message='Initializing app...'/>

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
      <CssBaseline/>
      <Header darkMode={darkMode} themeSelectorHandler={setThemeHandler}/>
      <Container>
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/catalog' component={Catalog} exact/>
            <Route path='/catalog/:id' component={ProductDetails}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/server-error' component={ServerError}/>
            <Route path='/basket' component={BasketPage}/>
            <PrivateRoute path='/checkout' component={CheckoutPage}/>
            <PrivateRoute path='/orders' component={Orders}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route component={NotFound}/>
          </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
