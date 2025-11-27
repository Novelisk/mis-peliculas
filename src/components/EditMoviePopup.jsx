import React from 'react';

export const EditMoviePopup = ({
  movie,
  handleGetMovies,
  setEditMovieInfo,
  setList,
}) => {
  const handleSaveChanges = (e, id) => {
    e.preventDefault();
    let target = e.target;

    const savedMovies = handleGetMovies();
    const index = savedMovies.findIndex((movie) => movie.id === id);

    let movieInf = {
      id,
      title: target.title.value,
      description: target.description.value,
    };

    savedMovies[index] = movieInf;

    localStorage.setItem('movies', JSON.stringify(savedMovies));

    setList(savedMovies);
    setEditMovieInfo(0);
  };

  return (
    <div className="edit_popup">
      <h3 className="edit_popup__title">Editar información de la película</h3>
      <form
        onSubmit={(e) => handleSaveChanges(e, movie.id)}
        className="edit_popup__form"
      >
        <input
          type="text"
          name="title"
          className="edit_popup__form_input"
          defaultValue={movie.title}
        />
        <textarea
          name="description"
          className="edit_popup__form_input"
          defaultValue={movie.description}
        />
        <button
          type="submit"
          className="edit_popup__form-submit"
          value="update"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
