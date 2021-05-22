import React from "react";
import { Image } from "./Image";
import { ProjectSection, TitreContainer, TimelineDotProjet } from "./styled";
import { AutreProjets, ParagrapheProjet, TitreProjet } from "./typography";

import Boutton from '../base/Boutton/styled';

type OwnProps = {
  id: string;
  titre: string;
  precedent?: string;
  suivant?: string;
  texte: string;
  imgUrl: string;
};

const Projet: React.FC<OwnProps> = ({
  id,
  titre = "Titre",
  precedent,
  suivant,
  texte,
  imgUrl,
}) => {
  return (
    <>
      <ProjectSection id={id}>
        {precedent && <AutreProjets variante="top">{precedent}</AutreProjets>}
        <Image src={imgUrl} alt="project" />
        <TitreContainer>
          <TitreProjet>{titre}</TitreProjet>
          <TimelineDotProjet />
        </TitreContainer>
        <ParagrapheProjet>{texte}</ParagrapheProjet>
        <Boutton>Plus d'info</Boutton>
        {suivant && <AutreProjets variante="bottom">{suivant}</AutreProjets>}
      </ProjectSection>
    </>
  );
};

export default Projet;
