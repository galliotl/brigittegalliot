import { createGlobalStyle } from "styled-components";

import NunitoItalic from "./nunito-sans-v6-latin-italic.woff";
import NunitoItalicw2 from "./nunito-sans-v6-latin-italic.woff2";
import Nunito from "./nunito-sans-v6-latin-regular.woff2";
import Nunitow2 from "./nunito-sans-v6-latin-regular.woff2";
import OpenSans700 from "./open-sans-v18-latin-700.woff";
import OpenSans700w2 from "./open-sans-v18-latin-700.woff2";
import OpenSans800 from "./open-sans-v18-latin-800.woff2";
import OpenSans800w2 from "./open-sans-v18-latin-800.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: local('Nunito'), url(${Nunitow2}) format('woff2'), url(${Nunito}) format('woff');
  }
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    src: local('Nunito'), url(${NunitoItalicw2}) format('woff2'), url(${NunitoItalic}) format('woff');
  }
  @font-face {
    font-family: 'OpenSans';
    font-weight: 700;
    src: local('OpenSans'), url(${OpenSans700w2}) format('woff2'), url(${OpenSans700}) format('woff');
  }
  @font-face {
    font-family: 'OpenSans';
    font-weight: 800;
    src: local('OpenSans'), url(${OpenSans800w2}) format('woff2'), url(${OpenSans800}) format('woff');
  }
`;
