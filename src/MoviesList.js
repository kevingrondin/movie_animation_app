import { useQuery } from "react-query";
import styled from "styled-components";
import { getAll } from "./service/movieApi";
import Movie from "./Movie";

const MoviesList = () => {
  const { data, isLoading, isError, error } = useQuery("movies", getAll);
  
  if(isLoading)
    return <h1>Chargement</h1>

  if(isError)
    return <h1>{error}</h1>
  
  return (
    <MovieGrid>
      {data?.results?.map((m) => (
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
