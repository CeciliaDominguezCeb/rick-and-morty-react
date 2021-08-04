import styled, { keyframes } from "styled-components";

const typing = keyframes`
from{
  width:0;
}`;

const blink = keyframes`
   from, to { border-color: transparent }
  50% { border-color: white; }
}
`;

export const Grid = styled.div`
  block-size: 80%;
  display: grid;
  place-items: center;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 50px 20px;

  @media ${({ theme }) => theme.mediaQueries.bellow760} {
    inline-size: 90vw;
  }
`;

export const ButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  border: 1px solid #12b0c9;
  box-shadow: -1px 2px 8px 1px rgba(18, 176, 201, 0.75);
  color: white;
  cursor: pointer;
  font-family: "Anonymous Pro", monospace;
  margin: 4px;
  padding: 4px;

  &:focus {
    background-color: #12b0c9;
    box-shadow: -1px 2px 8px 1px rgba(0, 0, 0, 0.75);
  }
`;
export const SearchBar = styled.div`
  block-size: 120px;
  inline-size: 70vw;
  margin: 15px auto;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.bellow760} {
    inline-size: 90vw;
  }
`;
export const InputSearch = styled.input`
  background-color: rgba(18, 176, 201, 0.1);
  block-size: 50px;
  border-radius: 15px;
  border: 3px solid #12b0c9;
  color: #fff;
  font-family: "Anonymous Pro", monospace;
  font-size: 1.5rem;
  inline-size: 80%;
  margin: 5px auto;
  padding: 5px;

  &:focus {
    box-shadow: -1px 2px 8px 2px rgba(18, 176, 201, 0.75);
    outline: #12b0c9;
  }

  &::placeholder {
    font-family: "Anonymous Pro", monospace;
    font-size: 18px;
  }
`;

export const SearchDescription = styled.div`
  div {
    animation: ${typing} 3.5s steps(31, end), ${blink} 0.7s step-end infinite;
    border-right: 3px solid;
    font-family: "Press Start 2P", cursive;
    font-size: 1.6rem;
    font-weight: 800;
    margin: 10px auto;
    overflow: hidden;
    white-space: nowrap;
    width: 31ch;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow760} {
    div {
      font-size: 1.1rem;
    }
  }
`;

export const PageButtonsContainer = styled.div`
  text-align: center;
`;
