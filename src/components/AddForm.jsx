import React, { useState } from 'react';
import { saveInStorage } from '../utils/SaveInStorage';

export const AddForm = ({ setList }) => {
  const componentTitle = 'Añadir película';
  const [movie, setMovie] = useState({
    title: '',
    description: '',
  });

  const { title, description } = movie;

  const handleGetFormData = (e) => {
    e.preventDefault();

    let data = e.target;
    let title = data.title.value;
    let description = data.description.value;

    let movieInfo = {
      id: new Date().getTime(),
      title,
      description,
    };

    setMovie(movieInfo);

    setList((elements) => {
      return [movieInfo, ...elements];
    });

    saveInStorage('movies', movieInfo);
  };

  return (
    <div className="aside__add">
      <h3 className="aside__add-title">{componentTitle}</h3>

      <strong>
        {title &&
          description &&
          `Película "${title}" se ha guardado correctamente.`}
      </strong>

      <form className="aside__form" onSubmit={handleGetFormData}>
        <input
          className="aside__form_input"
          name="title"
          id="title"
          type="text"
          placeholder="Título"
        />
        <textarea
          className="aside__form_text-area"
          name="description"
          id="description"
          placeholder="Descripción"
        ></textarea>
        <button
          className="aside__form-submit"
          id="save"
          type="submit"
          value="save"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
