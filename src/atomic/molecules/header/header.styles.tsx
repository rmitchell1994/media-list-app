import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colours.primaryNavigation};
  width: 100%;
  height: 7vw;
  color: ${(props) => props.theme.colours.primaryText};
`;

export const HeaderText = styled.h1`
  margin: 0 auto;
  text-align: center;
  flex: 1;
`;
export const HeaderLink = styled(Link)`
  text-align: right;
  flex: 1;
  margin: 0 20px;
`;

export const HeaderIcon = styled.div`
  flex: 1;
`;
