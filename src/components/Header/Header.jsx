import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redax/operation';
import { selectIsLoggedIn, selectUserData } from 'redax/selectors';
import { NavLink } from 'react-router-dom';
import './header.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import '@fontsource/roboto/500.css';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Button,
  Stack,
  Avatar,
  Typography,
  Box,
  Container,
} from '@mui/material';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const nameUser = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  return (
    <Container>
      <header>
        <Box
          component="ul"
          className="list"
          sx={{
            borderBottom: '1px solid grey',
            pb: 2,
          }}
        >
          {!isLoggedIn ? (
            <Stack
              spacing={2}
              direction="row"
              sx={{ justifyContent: 'center' }}
            >
              <li>
                <Button variant="button">
                  <NavLink className="navLinkStyle" to="/">
                    Main
                  </NavLink>
                </Button>
              </li>
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
              <Grid2
                component="ul"
                container
                direction="row"
                spacing={5}
                sx={{
                  listStyle: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid2 component="li">
                  <NavLink className="navLinkStyle" to="/">
                    <Typography variant="button">Main</Typography>
                  </NavLink>
                </Grid2>
                <Grid2 component="li">
                  <NavLink className="navLinkStyle" to="/contacts">
                    <Typography variant="button">Phonebook</Typography>
                  </NavLink>
                </Grid2>
                <Grid2 component="li">
                  <Typography variant="subtitle1">
                    Welcome {nameUser.name}
                  </Typography>
                </Grid2>
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: 'secondary.main',
                  }}
                >
                  <AssignmentIndIcon />
                </Avatar>
                <Grid2 component="li">
                  <Button
                    type="button"
                    onClick={handleLogOut}
                    variant="outlined"
                  >
                    <ExitToAppIcon />
                    Log Out
                  </Button>
                </Grid2>
              </Grid2>
            </li>
          )}
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Header;
