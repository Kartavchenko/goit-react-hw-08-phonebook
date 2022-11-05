import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const HeaderStyle = styled.header`
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
`;

export const ItemRout = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
`;

export const ItemButton = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`;

export const NameUser = styled.p`
  margin: 0;
`;

export const BtnLogOut = styled.button`
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
  border: none;
  background-color: #d0c7ff;
  cursor: pointer;
`;