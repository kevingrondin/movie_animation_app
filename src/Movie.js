import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
    </Overdrive>
  </Link>
);

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px black:
`;
