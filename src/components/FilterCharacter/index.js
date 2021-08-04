import React, { useState } from "react";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import CharacterCard from "../CharacterCard";
import { Spinner } from "react-spinners-css";
import {
  ButtonStyled,
  Grid,
  InputSearch,
  PageButtonsContainer,
  SearchBar,
  SearchDescription,
} from "./styles";
import CharacterNotFound from "../CharacterNotFound";

const FilterCharacter = () => {
  const { state, setPage } = useFetchCharacters();
  const { data: characters, loading } = state;
  const [search, setSearch] = useState("");

  const handleInputValue = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    characterFiltered;
  };

  const characterFiltered = characters.filter((character) => {
    return character.name.toUpperCase().includes(search.trim().toUpperCase());
  });

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((page) => {
      let nextPage = page + 1;
      if (nextPage > characters.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((page) => {
      let prevPage = page - 1;
      if (prevPage < 0) {
        prevPage = characters.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <>
      <SearchBar>
        <form onSubmit={handleSubmit}>
          <SearchDescription>
            <div>Search your favourite character</div>

            <InputSearch
              type="text"
              value={search}
              onChange={handleInputValue}
              placeholder="e.g. Rick"
            />
          </SearchDescription>
        </form>
      </SearchBar>
      <Grid>
        {loading ? (
          <Spinner color="#12B0C9" size={200} />
        ) : (
          characterFiltered.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                id={character.id}
                character={character.name}
                img={character.image}
                status={character.status}
                species={character.species}
                origin={character.origin.name}
                location={character.location.name}
              />
            );
          })
        )}
        {!loading && characterFiltered.length === 0 ? (
          <CharacterNotFound />
        ) : null}
      </Grid>
      {characterFiltered.length != 0 ? (
        <PageButtonsContainer>
          <ButtonStyled onClick={prevPage}>Prev Page</ButtonStyled>
          {characters.map((item, index) => {
            return (
              <ButtonStyled key={index} onClick={() => handlePage(index)}>
                {index + 1}
              </ButtonStyled>
            );
          })}
          <ButtonStyled onClick={nextPage}>Next Page</ButtonStyled>
        </PageButtonsContainer>
      ) : null}
    </>
  );
};

export default FilterCharacter;
