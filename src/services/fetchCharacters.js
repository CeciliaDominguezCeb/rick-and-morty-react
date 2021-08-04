const getCharacters = async (page) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export default getCharacters;
