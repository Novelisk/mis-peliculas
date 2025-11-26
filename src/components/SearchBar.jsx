import React from 'react'

export const SearchBar = () => {
  return (
     <div className="aside__search">
        <h3 className="aside__search-title">Buscador</h3>
        <form className="aside__form">
            <input className="aside__form_input" type="text" />
            <button className="aside__form-submit">Buscar</button>
        </form>
    </div>
  )
}
