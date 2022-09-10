function Register() {
    return (
        <section className="auth">
            <h1 clasName="auth__title">Регистрация</h1>
            <form className="auth__form">
                <label className="auth__field">
                    <input
                        className="auth__input auth__input_type_email"
                        id="email"
                        name="email"
                        type="email"
                        value={email || ""}
                        placeholder="Email"
                        required
                        // onChange={}
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
                        // onChange={}
                    />
                    <span className="auth__error" id="email-error"></span>
                </label>
                <button className="auth__submit-button" type="submit"></button>
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