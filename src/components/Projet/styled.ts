import styled from "styled-components";
import Section from "../base/Section";
import { TimelineDot } from "../Timeline";

export const ProjectSection = styled(Section)`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--navbar-height));
  justify-content: center;
  padding-bottom: 90px;
  padding-top: 90px;
  padding-right: 90px;
  scroll-snap-align: start;
`;

export const TitreContainer = styled.div`
  position: relative;
  max-width: 50%;
`;

export const TimelineDotProjet = styled(TimelineDot)`
  bottom: 0;
  margin: auto;
  position: absolute;
  right: -94px;
  top: 0;
  z-index: 2;
`;
