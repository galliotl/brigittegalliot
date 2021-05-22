import styled from "styled-components";

const Section = styled.section<{ variante?: "hero" }>`
  box-sizing: border-box;
  padding: 0 25px;
  position: relative;
  width: 100%;
`;

export const SectionSnap = styled(Section)`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: calc(100vh - var(--navbar-height));
`;

export default Section;
