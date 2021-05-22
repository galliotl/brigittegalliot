import React from "react";

// Components
import Markdown from "../base/Markdown";

type RestaurantProps = {
  name: string;
  description: string;
};

const Restaurant: React.FC<RestaurantProps> = ({ name, description }) => (
  <div>
    <h1>{name}</h1>
    <Markdown>{description}</Markdown>
  </div>
);

export default Restaurant;
