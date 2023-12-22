import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { AuthContext } from "../contexts/authContext";
import { useQuery } from "react-query";
import { getUserFavorites } from "../api/myapi";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  

  const { userEmail } = useContext(AuthContext);
  const existingToken = localStorage.getItem("token");
  const authToken = existingToken;

  const { data: movies, error, isLoading, isError } = useQuery(
    "favorites",
    async () => {
      try {
        const favoriteMovies = await getUserFavorites(authToken, userEmail);
        return favoriteMovies.favorites || []; 
      } catch (error) {
        throw error;
      }
    }
  );

  if (isError) {
    console.error("Favorites Error:", error);
    return <div>Favorites Error</div>;
  }


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
    };

export default FavoriteMoviesPage;
