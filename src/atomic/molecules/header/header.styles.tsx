import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colours.primaryNavigation};
  width: 100%;
  height: 7vw;
  color: ${(props) => props.theme.colours.primaryText};
`;
