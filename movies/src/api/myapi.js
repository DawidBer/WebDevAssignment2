
export const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ username: email, password: password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed. Please try again.');
    }

    return data;
  } catch (error) {
    throw error; 
  }
};


export const signup = async (email, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: email, password: password })
    });

    return response.json();
};

export const getUserDetails = async (username, authToken) => {
  try {
    const response = await fetch(`http://localhost:8080/api/users/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${authToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data.user;
    } else {
      throw new Error(data.msg || 'Error getting details.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error getting details.');
  }
};

export const getUserFavorites = async (authToken, email) => {

  try {
    const response = await fetch(`http://localhost:8080/api/users/${email}/favorites`, {
      method: 'GET',
      headers: {
        'Authorization': `${authToken}`,
        'Content-Type': 'application/json',
      },
    });


    if (!response.ok) {
      throw new Error('user favorites not found');
    }

    const userfavorites = await response.json();
    return userfavorites;
  } catch (error) {
    throw error;
  }
};

export const getMovies = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/movies/tmdb/movies');

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'cant locate movies');
    }

    return data;
  } catch (error) {
    throw error; 
  }
};


export const getUserWatchlist = async (authToken, email) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${email}/watchlist`, {
        method: 'GET',
        headers: {
          'Authorization': `${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('watchlist not found');
      }
  
      const watchlist = await response.json();
      return watchlist;
    } catch (error) {
      throw error;
    }
  };

export const getMovie = async (movieId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${movieId}/form`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'cannot locate movies');
    }

    return data;
  } catch (error) {
    throw error; 
  }
};

export const getActorsMovies = async (person_id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/actors/${person_id}/movies`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getActorsDetails = async (person_id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/actors/${person_id}/details`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getLatestMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/latest`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getActorImages = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/actors/${id}/images`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${id}/credits`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMovie1 = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getRecommendations = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${id}/recommendations`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/popular`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getTrendingActors = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/trending/actors`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/trending/movies`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/upcoming`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMoviesSorted = async (sort_by) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/${sort_by}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getGenres = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/genres`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${id}/reviews`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMoviesExternalIds = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${id}/externalID`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMovieImages = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/${id}/images`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const getMovieImages2 = ({ id }) => {
  if (!id) {
    return Promise.resolve(null);
  }

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getActor = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/actor/${id}`, {

    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getActorCredits = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actor/${id}/credits`, {

    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getCast = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/tmdb/movie/${id}/cast`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'cannot get movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
};

export const addFavourites = async (authToken, email) => {

  try {
    const response = await fetch(`http://localhost:8080/api/users/${email}/favorites`,{
      method: 'GET',
      headers: {
        'Authorization': `${authToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Email failure');
    }

    const favMovies = await response.json();
    return favMovies;
  } catch (error) {
    throw error;
  }
};

   
