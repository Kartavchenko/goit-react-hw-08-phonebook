import { useSelector, useDispatch } from 'react-redux';
import { getState } from '../redax/selectors';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redax/operation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Header = lazy(() => import('./Header/Header'));
const RegisterUser = lazy(() => import('../pages/RegisterUser/RegisterUser'));
const LoggedIn = lazy(() => import('../pages/LoggedIn/LoggedIn'));

export const App = () => {
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterUser />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoggedIn />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            {loading && <p>...Loading</p>}
            {error && <p>Somithing went wrong</p>}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
