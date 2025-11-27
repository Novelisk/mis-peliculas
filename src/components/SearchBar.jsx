import React, { useState } from 'react';

export const SearchBar = ({ list, setList }) => {
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearchMovie = (e) => {
    setSearch(e.target.value);

    let foundMovies = list.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });

    if (search.length <= 1 || foundMovies <= 0) {
      foundMovies = JSON.parse(localStorage.getItem('movies'));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setList(foundMovies);
  };

  return (
    <div className="aside__search">
      <h3 className="aside__search-title">Buscador: {search}</h3>
      {notFound === true && search.length > 1 && (
        <span className="aside_search-span">
          No se ha encontrado ninguna coincidencia.
        </span>
      )}
      <form className="aside__form">
        <input
          className="aside__form_input"
          type="text"
          name="searchBar"
          autoComplete="off"
          onChange={handleSearchMovie}
        />
        <button className="aside__form-submit">Buscar</button>
      </form>
    </div>
  );
};
