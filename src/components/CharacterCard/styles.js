import styled from "styled-components";
import { ButtonStyled } from "../FilterCharacter/styles";

export const CardContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  block-size: 350px;
  border-radius: 25px;
  border: 3px solid #12b0c9;
  box-shadow: 4px 2px 10px 0px rgba(18, 176, 201, 0.75);
  display: flex;
  flex-direction: column;
  inline-size: 300px;
  justify-content: space-around;
  padding: 5px;
  position: relative;

  &:hover {
    box-shadow: 0px 5px 10px rgba(187, 213, 58, 0.9);
    top: -4px;
    transition: all 0.2s ease-out;
  }

  figure {
    block-size: 250px;
    inline-size: 250px;
    margin: 2px;
  }

  figure img {
    width: 100%;
  }

  > p {
    font-family: "Press Start 2P", cursive;
    font-size: 1.5rem;
  }
`;

export const InfoButton = styled(ButtonStyled)`
  background-color: #c8dd5d;
  block-size: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: none;
  color: black;
  cursor: pointer;
  font-weight: 800;
  inline-size: 40px;
  inset-block-start: 245px;
  inset-inline-start: 240px;
  outline: none;
  position: absolute;
  text-align: center;
  vertical-align: center;

  :hover {
    background-color: #12b0c9;
    box-shadow: 0px 0px 4px 0px rgba(18, 176, 201, 0.75);
    color: white;
    transition: all 0.5s 0.2s ease;
  }
`;

export const CharacterInfoContainer = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.75);
  border: 1 px solid red;
  display: grid;
  height: 100vh;
  left: 0;
  place-items: center;
  position: fixed;
  top: 0;
  transition: opacity 300ms ease-in-out;
  width: 100vw;
  z-index: 100;
`;
