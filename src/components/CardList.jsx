import React, { useEffect, useState } from 'react';
import { EditMoviePopup } from './EditMoviePopup';

export const CardList = ({ list, setList }) => {
  // const [list, setList] = useState([]);
  const [editMovieInfo, setEditMovieInfo] = useState(0);

  useEffect(() => {
    handleGetMovies();
  }, []);

  const handleGetMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));
    setList(movies);
    return movies;
  };

  const handleDeleteMovie = (id) => {
    let savedMovies = handleGetMovies();
    let newMoviesList = savedMovies.filter(
      (movie) => movie.id !== parseInt(id)
    );

    setList(newMoviesList);

    localStorage.setItem('movies', JSON.stringify(newMoviesList));
  };

  return (
    <>
      {list !== null ? (
        list.map((m) => {
          return (
            <div className="main__card" key={m.id}>
              <h3 className="main__card-title">{m.title}</h3>
              <p className="main__card-text">{m.description}</p>
              <button
                className="main__card-edit"
                onClick={() => {
                  setEditMovieInfo(m.id);
                }}
              >
                Editar
              </button>
              <button
                className="main__card-delete"
                onClick={() => handleDeleteMovie(m.id)}
              >
                Borrar
              </button>

              {editMovieInfo === m.id && (
                <EditMoviePopup
                  movie={m}
                  handleGetMovies={handleGetMovies}
                  setEditMovieInfo={setEditMovieInfo}
                  setList={setList}
                />
              )}
            </div>
          );
        })
      ) : (
        <h2>No hay películas para mostrar.</h2>
      )}
    </>
  );
};
