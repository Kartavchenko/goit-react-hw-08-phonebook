import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redax/operation';
import { selectIsLoggedIn, selectUserData } from 'redax/selectors';
import {
  ItemRout,
  ItemButton,
  List,
  BtnLogOut,
  HeaderStyle,
  NameUser,
} from './header.styled.js';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const nameUser = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  // continue make disign site, finish make header list

  return (
    <>
      <HeaderStyle>
        <List>
          {!isLoggedIn ? (
            <>
              <ItemRout to="/register">Register</ItemRout>
              <ItemRout to="/login">Login In</ItemRout>
            </>
          ) : (
            <ItemButton>
              <ul>
                <li>
                  <NameUser>Welcome {nameUser.name}</NameUser>
                </li>
                <li>
                  <BtnLogOut type="button" onClick={handleLogOut}>
                    Log Out
                  </BtnLogOut>
                </li>
              </ul>
            </ItemButton>
          )}
        </List>
      </HeaderStyle>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
