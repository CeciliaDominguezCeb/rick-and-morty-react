import React, { useState } from "react";
import PropTypes from "prop-types";
import CharacterInfo from "../CharacterInfo";
import { CardContainer, InfoButton, CharacterInfoContainer } from "./styles";

const CharacterCard = ({
  character,
  img,
  origin,
  location,
  status,
  species,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleButtonInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <CardContainer>
      <figure>
        <img width="250" height="250" src={img} alt={character} />
      </figure>
      <p>{character}</p>

      <InfoButton onClick={handleButtonInfo}>
        <span className="material-icons">add</span>
      </InfoButton>
      {showInfo && (
        <CharacterInfoContainer>
          <CharacterInfo
            name={character}
            info={handleButtonInfo}
            status={status}
            species={species}
            img={img}
            location={location}
            origin={origin}
          />
        </CharacterInfoContainer>
      )}
    </CardContainer>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default CharacterCard;
