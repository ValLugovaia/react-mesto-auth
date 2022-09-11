import { Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';

function Register({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const formRef = useRef();
    // const submitButton = useCheckButton(formRef.current, isValid);

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(password, email);
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Регистрация</h1>
            <form className="auth__form" onSubmit={handleSubmit}>
                <label className="auth__field">
                    <input
                        className="auth__input auth__input_type_email"
                        id="email"
                        name="email"
                        type="email"
                        value={email || ""}
                        placeholder="Email"
                        required
                        onChange={handleEmail}
                    />
                    <span className="auth__error" id="email-error"></span>
                </label>
                <label className="auth__field">
                    <input
                        className="auth__input auth__input_type_password"
                        id="password"
                        name="password"
                        type="password"
                        value={password || ""}
                        placeholder="Пароль"
                        required
                        onChange={handlePassword}
                    />
                    <span className="auth__error" id="email-error"></span>
                </label>
                <button className="auth__submit-button" type="submit">Зарегистрироваться</button>
                <Switch>
                    <Route>
                        <Link to="/sign-in" className="auth__signin-link">
                            <p className="auth__signin">Уже зарегистрированы? Войти</p>
                        </Link>
                    </Route>
                </Switch>
            </form>
        </section>
    )
}

export default Register;