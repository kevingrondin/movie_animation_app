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

  const fetchData = async () => {
    try {
      const res = await MovieApi(id);
      console.log("res", res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>TEST</h1>
    </>
  );
};

export default MovieDetail;
