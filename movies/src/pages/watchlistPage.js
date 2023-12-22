import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { AuthContext } from "../contexts/authContext";
import { useQuery } from "react-query";
import { getUserWatchlist } from "../api/myapi";
import Spinner from '../components/spinner';
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";

const WatchListPage = () => {

  const { userEmail } = useContext(AuthContext);
  const existingToken = localStorage.getItem("token");
  const authToken = existingToken;

  const { data: movies, error, isLoading, isError } = useQuery(
    "watchlist",
    async () => {
      try {
        const watchlist = await getUserWatchlist(authToken, userEmail);
        return watchlist.watchlist || []; 
      } catch (error) {
        throw error;
      }
    }
  );

  if (isError) {
    console.error("Watchlist Error:", error);
    return <div>Watchlist Error</div>;
  }


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageTemplate
      title="Watchlist Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchlist movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
    };

export default WatchListPage;