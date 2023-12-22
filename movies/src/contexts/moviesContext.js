import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/authContext';

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchList, setWatchList] = useState( [] )
  const { userId } = useContext(AuthContext);
  

  const addToFavorites = async (movie, token) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/addtofavorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ movie, user: userId }), 
      });
  
      if (response.ok) {
        setFavorites([...favorites, movie.id]);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.msg || 'failed to add movie';
        
        console.error('failed to add movie', errorMessage);
      }
    } catch (error) {
      console.error('failed to add movie', error.message);
    }
  };


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review} )
  };
  
  const removeFromFavorites = async (movie, token) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/removefromfavorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ movie, user: userId }), 
      });
  
      if (response.ok) {
        setFavorites((prevFavorites) => prevFavorites.filter((mId) => mId !== movie.id));
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.msg || 'Error removing movie';
  
        console.error('Error removing movie', errorMessage);
      }
    } catch (error) {
      console.error('Error removing movie', error.message);
    }
  };


  const addToWatchList = async (movie, token) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/addtowatchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ movie, user: userId }), 
      });
  
      if (response.ok) {
        setWatchList([...watchList, movie.id]);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.msg || 'failed to add movie';
        
        console.error('failed to add movie', errorMessage);
      }
    } catch (error) {
      console.error('failed to add movie', error.message);
    }
  };

  const removeFromWatchlist = async (movie, token) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/removefromwatchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ movie, user: userId }), 
      });
  
      if (response.ok) {
        setWatchList((prevWatchList) => prevWatchList.filter((mId) => mId !== movie.id));
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.msg || 'Error removing movie';
  
        console.error('Error removing movie', errorMessage);
      }
    } catch (error) {
      console.error('Error removing movie', error.message);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        watchList,
        addToWatchList,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;