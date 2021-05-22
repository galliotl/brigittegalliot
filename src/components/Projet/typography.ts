import styled, { css } from "styled-components";
import { H2, H1, P } from "../base/Typography";

const typographyProjet = css`
  text-align: right;
  text-align: right;
`;

export const AutreProjets = styled(H2)<{ variante: "top" | "bottom" }>`
  ${typographyProjet};
  font-style: italic;
  max-width: 50%;
  opacity: 0.4;
  position: absolute;
  ${(p) => (p.variante === "top" ? "top: 90px;" : "bottom: 90px")};
`;

export const TitreProjet = styled(H1)`
  ${typographyProjet}
`;

export const ParagrapheProjet = styled(P)`
  ${typographyProjet};
  max-width: 50%;
`;
