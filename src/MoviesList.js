import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieApi from "./service/movieApi";
import Movie from "./Movie";

function MoviesList() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      let { data } = await MovieApi.getAll();
      setMovies(data.results);
    } catch (err) {
      console.log("fetchData_ERROR", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MovieGrid>
      {movies?.map((m) => (
        <Movie key={m.id} movie={m} />
      ))}
    </MovieGrid>
  );
}

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

export default MoviesList;
