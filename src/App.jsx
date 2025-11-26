import { AddForm } from "./components/AddForm";
import { CardList } from "./components/CardList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
      <div className="page">
        <header className="header">
          <div className="header__logo">
            <div className="header__play"></div>
          </div>
          <h1 className="header__title">Mis películas</h1>
        </header>

        <nav className="nav-bar">
          <ul className="nav-bar__list">
            <li>
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#">Películas</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contacto</a>
            </li>
          </ul>
        </nav>

        <section className="main">
         <CardList />
        </section>

        <aside className="aside">
          <SearchBar />
          <AddForm />
        </aside>

        <footer className="footer">&copy; Marco P. Ramírez | 2025</footer>
      </div>
  );
}

export default App;
