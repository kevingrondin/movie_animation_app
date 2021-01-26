import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Poster } from "./Movie";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import { getById } from "./service/movieApi";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(`movie_${id}`, () =>
    getById(id)
  );

  if (isLoading) return <h1>Chargement</h1>;

  if (isError) return <h1>{error}</h1>;

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${data.backdrop_path}`}>
      <MovieInfo>
        <Link to={`/`}>
          <Overdrive id={data.id} animationDelay={1} duration={8000}>
            <Poster
              src={`${POSTER_PATH}${data.poster_path}`}
              alt={data.title}
            />
          </Overdrive>
        </Link>
        <div>
          {data.title ? <h1>Hello</h1> : <h1>Hi</h1>}
          <h1>{data.title}</h1>
          <h3>{data.release_date}</h3>
          <p>{data.overview}</p>
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
