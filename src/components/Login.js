function Login({ onLogin, isValid, errorMessage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef();
    const submitButton = useCheckButton(formRef.current, isValid);

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(password, email);
    }


    return (
        <section className="auth">
            <h1 clasName="auth__title">Вход</h1>
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
            </form>
        </section>
    )
}

export default Login;