import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito'
  }

  h1 {
    font-family: 'OpenSans';
    font-weight: 800;
  }

  html {
    --navbar-height: 80px;

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      --navbar-height: 100px;
    }
  }
`;
