import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
//import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
//import chakraTheme from '@chakra-ui/theme'
import { Layout } from 'components/Layout/Layout';
import { authOperations } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { authSelectors } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/homePage'));
const ContactsPage = lazy(() => import('../pages/contactsPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const RegistrationPage = lazy(() => import('../pages/registrationPage'));


export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <p>Loading...</p>
  ) : (
   
      <Suspense>
        
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    
      </Suspense>
      
  );
};
