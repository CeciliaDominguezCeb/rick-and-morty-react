import styled from "styled-components";
import { InfoButton } from "../CharacterCard/styles";

export const InfoContentContainer = styled.div`
  border-radius: 35px;
  border: 3px solid #12b0c9;
  box-shadow: 4px 2px 10px 0px rgba(18, 176, 201, 0.75);
  height: 70vh;
  max-height: 70vh;
  max-width: 50vw;
  min-height: 350px;
  min-width: 350px;
  padding: 10px;
  backdrop-filter: blur(5px);
`;

export const InfoContent = styled.section`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 100px));
  padding: 20px;

  & h2 {
    align-self: center;
    font-family: "Press Start 2P", cursive;
    font-size: 2.5rem;
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
    padding: 10px;
  }

  figure {
    align-self: end;
    grid-column: 1 / 1;
    grid-row: 1 /3;
    inline-size: 100%;
    inline-size: 80%;
    justify-self: center;

    & img {
      block-size: auto;
      inline-size: 100%;
    }
  }

  div {
    font-size: 2rem;
    grid-column: 2 / span 2;
    grid-row: 2 /5;

    & span {
      font-weight: 800;
    }

    & p {
      border-bottom: 2px dotted #12b0c9;
      padding: 5px;
    }
  }
`;

export const CloseButton = styled(InfoButton)`
  align-self: start;
  grid-column: 4 / span 1;
  grid-row: 1/ 2;
  justify-self: end;
  position: static;
`;
