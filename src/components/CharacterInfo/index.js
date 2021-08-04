import React from "react";
import PropTypes from "prop-types";
import { InfoContent, InfoContentContainer, CloseButton } from "./styles";

const CharacterInfo = ({
  img,
  name,
  status,
  species,
  info,
  origin,
  location,
}) => {
  return (
    <InfoContentContainer>
      <InfoContent>
        <h2>{name}</h2>
        <figure>
          <img
            src={img}
            title={" image from character ${name}"}
            alt={"image from character ${name}"}
          />
        </figure>
        <div>
          <p>
            <span>Status: </span> {status}
          </p>
          <p>
            <span>Species: </span>
            {species}
          </p>
          <p>
            <span>Origin: </span> {origin}
          </p>
          <p>
            <span>Location: </span>
            {location}
          </p>
        </div>
        <CloseButton onClick={info}>
          <span className="material-icons md-48">close</span>
        </CloseButton>
      </InfoContent>
    </InfoContentContainer>
  );
};

CharacterInfo.propTypes = {
  img: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterInfo;
