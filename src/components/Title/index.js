import React from "react";
import { Header } from "./styles";

const Title = () => {
  return (
    <Header>
      <img
        rel="preload"
        src="/rick-and-morty.png"
        alt="image shows text of rick and morty"
      />
    </Header>
  );
};

export default Title;
