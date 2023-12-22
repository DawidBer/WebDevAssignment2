import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../../src/components/templateActorDetails";
import { getActor, getActorCredits } from '../api/myapi';
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToWatchListIcon from "../components/cardIcons/watchListIcon";
import ActorsDetails from "../components/ActorDetails";


const ActorDetailsPage = () => {
  const { id } = useParams();
    const { data: movies, error, isLoading, isError} = useQuery(
      ["movie", { id: id }],
      () => getActorCredits(id)
    );

    const { data: actor  } = useQuery(
      ["actor", { id: id }],
      () => getActor(id)
    );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const allMovies = movies.cast;

  const popularList = allMovies.filter(m => m.popularList)
  localStorage.setItem('actorMovies', JSON.stringify(popularList));
  // const addToPopularList = (movieId) => true

  return (
    <>
      {actor ? (
        <>
          <PageTemplate allMovies={allMovies}
            details={actor}
            title="Actors Details"
            action={(movies) => {
                return <AddToWatchListIcon movie={movies} />
            }}>
            <ActorsDetails details={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Movie Details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;