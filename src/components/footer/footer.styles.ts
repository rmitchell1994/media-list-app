import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: ${(props) => props.theme.colours.primaryNavigation};
  color: ${(props) => props.theme.colours.primaryText};
`;
