import React from "react";

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start col-md-3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => {
              props.handleFavouritesClick(movie);
            }}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
