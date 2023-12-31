export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
    
  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
    
    export const getGenres = async () => {
      return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
          process.env.REACT_APP_TMDB_KEY +
          "&language=en-US"
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
    export const getMovieImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
    
    export const getUpcomingMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };
  
    export const getRecommended = (movieId) => {
      if (!movieId) {
        throw new Error('Invalid ID');
      }
    
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  
    export const getLatestMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) => { 
      return data})
      .catch((error) => {
        throw error
      });
    };
  
    export const getPopularMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) =>{
        return data
      } ) 
      .catch((error) => {
        throw error
      });
    };
  
    export const getTrendingMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) =>{
        return data })
  
      .catch((error) => {
        throw error
      });
    };
  
    export const getMovieCredits = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) =>{
        return data })
  
      .catch((error) => {
        throw error
      });
    };
  
    export const getActorImages = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) =>{
        return data })
  
      .catch((error) => {
        throw error
      });
    };
  
    export const getActor = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  
  
    export const getActorCredits = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  
    export const getCast = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if(!response.ok){
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .then((data) =>{
        return data })
  
      .catch((error) => {
        throw error
      });
    };
  
  
    export const getMovieReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
          return json.results;
        });
    };