import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../redax/operation';
import {
  ItemRout,
  ItemButton,
  List,
  BtnLogOut,
  HeaderStyle,
} from './header.styled.js';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  return (
    <>
      <HeaderStyle>
        <List>
          <ItemRout to="/register">Register</ItemRout>
          <ItemRout to="/login">Login In</ItemRout>
          <ItemButton>
            <BtnLogOut type="button" onClick={handleLogOut}>
              Log Out
            </BtnLogOut>
          </ItemButton>
        </List>
      </HeaderStyle>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
