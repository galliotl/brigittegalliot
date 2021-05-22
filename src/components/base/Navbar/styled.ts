import styled from "styled-components";
import Logo from "../../../images/logo.png";

export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  height: var(--navbar-height);
  justify-content: center;
  position: sticky;
  top: 100;
  width: 100%;
`;

export const NavbarIcon = styled.div`
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 100px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.16);
  height: calc(var(--navbar-height) - 15px);
  width: calc(var(--navbar-height) - 15px);
`;
