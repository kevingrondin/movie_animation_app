import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Poster } from "./Movie";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import MovieApi from "./service/movieApi";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await MovieApi.getById(id);
        setMovie(data);
      } catch (e) {
        console.log("ERROR_FETCH_GETBYID", e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie?.backdrop_path}`}>
      <MovieInfo>
        <Link to={`/`}>
          <Overdrive id={movie?.id}>
            <Poster
              src={`${POSTER_PATH}${movie?.poster_path}`}
              alt={movie?.title}
            />
          </Overdrive>
        </Link>
        <div>
          {movie?.title ? <h1>Hello</h1> : <h1>Hi</h1>}
          <h1>{movie?.title}</h1>
          <h3>{movie?.release_date}</h3>
          <p>{movie?.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
};

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
