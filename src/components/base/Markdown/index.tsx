import ReactMarkdown from "react-markdown";
import {
  NormalComponents,
  SpecialComponents,
} from "react-markdown/src/ast-to-react";
import gfm from "remark-gfm";
import Block from "./elements/Block";
import Image from "./elements/Image";

const componentsMap: Partial<NormalComponents | SpecialComponents> = {
  img: Image,
  p: Block
};

const Markdown: React.FC<{ children: string }> = ({ children }) => (
  <ReactMarkdown remarkPlugins={[gfm]} components={componentsMap}>
    {children}
  </ReactMarkdown>
);

export default Markdown;
