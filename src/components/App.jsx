import { useSelector, useDispatch } from 'react-redux';
import { getState } from '../redax/selectors';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redax/operation';

const Header = lazy(() => import('./Header/Header'));
const RegisterUser = lazy(() => import('../pages/RegisterUser/RegisterUser'));
const LoggedIn = lazy(() => import('../pages/LoggedIn/LoggedIn'));
const FormContact = lazy(() => import('./Form/Form'));
const Filter = lazy(() => import('./Filter/Filter'));
const ListContacts = lazy(() => import('./List/List'));

export const App = () => {
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/login" element={<LoggedIn />} />
            <Route path="/contacts" element={<FormContact />} />
            <Route path="/contacts" element={<Filter />} />
            <Route path="/contacts" element={<ListContacts />} />
          </Route>
          {loading && <p>...Loading</p>}
          {error && <p>Somithing went wrong</p>}
        </Routes>
      </Suspense>
    </div>
  );
};
