import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redax/operation';
import { selectIsLoggedIn, selectUserData } from 'redax/selectors';
import { NavLink } from 'react-router-dom';
import './header.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import '@fontsource/roboto/500.css';
import { Button, Stack, Avatar, Typography } from '@mui/material';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const nameUser = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  return (
    <>
      <header>
        <ul className="list">
          {!isLoggedIn ? (
            <Stack spacing={2} direction="row">
              <li>
                <Button variant="outlined">
                  <NavLink className="navLinkStyle" to="/register">
                    Register
                  </NavLink>
                </Button>
              </li>
              <li>
                <Button variant="contained">
                  <NavLink className="navLinkStyle btnLogin" to="/login">
                    Login In
                  </NavLink>
                </Button>
              </li>
            </Stack>
          ) : (
            <li>
              <ul className="list">
                <li>
                  <NavLink className="navLinkStyle" to="/">
                    Main
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLinkStyle" to="/contacts">
                    Phonebook
                  </NavLink>
                </li>
                <li>
                  <Typography className="userName">
                    Welcome {nameUser.name}
                  </Typography>
                </li>
                <li>
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AssignmentIndIcon />
                  </Avatar>
                  <Button
                    type="button"
                    onClick={handleLogOut}
                    variant="outlined"
                  >
                    <ExitToAppIcon />
                    Log Out
                  </Button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
