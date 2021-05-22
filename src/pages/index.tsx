import React from "react";
import { SectionSnap } from "../components/base/Section";
import Projet from "../components/Projet";
import { projets } from "../components/Projet/__fixtures__";
import { TimelineLine } from "../components/Timeline";

const Index: React.FC = () => {
  return (
    <>
      <SectionSnap>
        {projets.map((projet, index, array) => {
          const precedent = index !== 0 ? array[index - 1] : void 0;
          const suivant =
            index !== array.length - 1 ? array[index + 1] : void 0;
          return (
            <Projet
              {...projet}
              id={projet.id}
              key={projet.id}
              precedent={precedent?.titre}
              suivant={suivant?.titre}
            />
          );
        })}
        <TimelineLine />
      </SectionSnap>
    </>
  );
};

export default Index;
