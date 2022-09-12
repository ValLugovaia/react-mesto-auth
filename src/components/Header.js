import { Route, Link } from 'react-router-dom';
import logo from '../images/header/header-logo.svg';

function Header(props) {
    return (
    <header className="header">
      <Route>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип Mesto Russia." />
        </Link>
      </Route>
      <div className="header__links">
        <Route path="/sign-up">
          <Link className="header__link" to="sign-in">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__link" to="sign-up">Регистрация</Link>
        </Route>
        <Route exact path="/">
          <p className="header__email">{props.userEmail}</p>
          <button className="header__exit" onClick={props.onSignOut}>Выйти</button>
        </Route>
      </div>
    </header>
  );
}

export default Header;