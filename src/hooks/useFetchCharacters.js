import { useState, useEffect } from "react";
import getCharacters from "../services/fetchCharacters";

export const useFetchCharacters = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  const initialPage = 1;

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    getCharacters().then((results) => {
      setState({
        data: results,
        loading: false,
      });
    });
  }, []);

  useEffect(() => {
    getCharacters(page).then((results) => {
      setState({
        data: results,
        loading: false,
      });
    });
  }, [page]);

  return {
    state,
    setPage,
  };
};
