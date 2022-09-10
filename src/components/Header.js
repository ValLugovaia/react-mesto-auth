import { Route, Link } from 'react-router-dom';
import logo from '../images/header/header-logo.svg';

function Header(props) {
    return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia." />
      <div className="header__links">
        <Route path="/sign-up">
          <Link className="header__link" to="signin">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__link" to="signup">Регистрация</Link>
        </Route>
        <Route exact path="/">
          <p className="header__email">{props.userData}</p>
          <button className="header__exit" onClick={props.signOut}>Выйти</button>
        </Route>
      </div>
    </header>
  );
}

export default Header;