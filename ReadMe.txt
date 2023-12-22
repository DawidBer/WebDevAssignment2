# Assignment 2 - Web API.

Name: Dawid Beres

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 login
registration
protected routes have been added 
watchlist and favourites saved to database
all imports have been re-routed to my-api

## Setup requirements.
.env files with mongodb

## API Configuration
.env file has to created which contains key to mongodb database and atlas. e.g 
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret


## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /tmdb/movies gets movies
- /tmdb/:movieId/form get's movie by id
- /tmdb/genres get's movie genres
- /tmdb/:id/images get's movie images
- /tmdb/movies/upcoming get's upcoming movies
- /tmdb/:id/recommendations get's recomandations
- /tmdb/latest get's latest
- /tmdb/movies/popular get's popular movies
- /tmdb/trending/movies get's trending movies
- '/tmdb/:id/credits get's movie credits
- /tmdb/actors/:id/images get's actor images by id
- /actor/:id get's actor by id
- /tmdb/actor/:id/credits get's actor credits by id
- /tmdb/movie/:id/cast get's the cast by movie id
- /tmdb/movie/:id/reviews get's movie reviews by movie id
- /users/:username get's username
-'/:id user by id
- /:user user by username
- /:email/favorites favorites by email
- /addtofavorites add to favorites
- /removefromfavorites remove from favourites
- /:email/watchlist watchlist by email
- /addtowatchlist add to watchlist
- /removefromwatchlist remove from watchlist


## Security and Authentication

favorites and watchlist routes are protected ,
there are user tokens when logging in and signing up ,
there are session tokens "bearer"

## Integrating with React App

all routes have been changed to either get information from api "tmdb" or "mongocollection"


