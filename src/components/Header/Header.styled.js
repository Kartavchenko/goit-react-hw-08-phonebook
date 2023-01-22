import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Avatar,
  Box,
  Typography
} from '@mui/material';

export const HeaderTag = styled(Box)`
  width: 100vw; 
  background-color: rgb(113, 157, 235, 0.7);
`;

export const MyTypography = styled(Typography)`
  padding: 10px 15px;
  border-radius: 3px;
  color: #3b0585;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background-color: rgba(120, 120, 120, 0.1);
  }

  &:active {
    color: #850541;
  }
`

export const MyBox = styled(Box)`
  padding-top: 15px;
  padding-bottom: 15px;
  list-style: none;
  padding-left: 0;
`;

export const MyGridList = styled(Grid2)`
  list-style: none;
  align-items: center;
  justify-content: center;
  padding-left: 0;
`;

export const MyAvatar = styled(Avatar)`
  background-color: #6f1cff;
`;

export const MyNavLink = styled(NavLink)`
  text-decoration: none;  
`;

export const MyNavLinkLogin = styled(NavLink)`
  color: white;
  text-decoration: none;  
`;