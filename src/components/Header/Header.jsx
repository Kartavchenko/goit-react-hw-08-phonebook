import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redax/operation';
import { selectIsLoggedIn, selectUserData } from 'redax/selectors';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import '@fontsource/roboto/500.css';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Button, Container, Typography } from '@mui/material';
import {
  MyAvatar,
  MyBox,
  MyGridList,
  MyNavLink,
  MyNavLinkLogin,
  HeaderTag,
  MyTypography,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const nameUser = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  return (
    <>
      <HeaderTag component="header">
        <MyBox>
          {!isLoggedIn ? (
            <MyGridList component="ul" container direction="row" spacing={5}>
              <Grid2 component="li">
                <Button variant="button">
                  <MyNavLink to="/">Main</MyNavLink>
                </Button>
              </Grid2>
              <Grid2 component="li">
                <Button variant="outlined">
                  <MyNavLink to="/register">Register</MyNavLink>
                </Button>
              </Grid2>
              <Grid2 component="li">
                <Button variant="contained">
                  <MyNavLinkLogin to="/login">Login In</MyNavLinkLogin>
                </Button>
              </Grid2>
            </MyGridList>
          ) : (
            <li>
              <MyGridList component="ul" container direction="row" spacing={5}>
                <Grid2 component="li">
                  <MyNavLink to="/">
                    <MyTypography variant="button">Main</MyTypography>
                  </MyNavLink>
                </Grid2>
                <Grid2 component="li">
                  <MyNavLink to="/contacts">
                    <MyTypography variant="button">Phonebook</MyTypography>
                  </MyNavLink>
                </Grid2>
                <Grid2 component="li">
                  <Typography variant="subtitle1">
                    Welcome {nameUser.name}
                  </Typography>
                </Grid2>
                <MyAvatar>
                  <FaceRetouchingNaturalIcon />
                </MyAvatar>
                <Grid2 component="li">
                  <Button
                    type="button"
                    onClick={handleLogOut}
                    variant="outlined"
                  >
                    <LogoutIcon />
                    Log Out
                  </Button>
                </Grid2>
              </MyGridList>
            </li>
          )}
        </MyBox>
      </HeaderTag>
      <Container component="main">
        <Outlet />
      </Container>
    </>
  );
};

export default Header;
