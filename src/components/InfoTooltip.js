import successImage from '../images/auth/auth-success.svg';
import errorImage from '../images/auth/auth-error.svg';

function InfoTooltip({ isSignup, isOpen, onClose }) {

    return (
        <section className={`popup popup_type_auth ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
            <button className="popup__close-button" type="button" onClick={onClose}></button>
            {isSignup ? (
            <img className="popup__auth-image" src={successImage} alt="Успешная регистрация."></img>
          ) : (
            <img className="popup__auth-image" src={errorImage} alt="Ошибка регистрации."></img>
          )}
            {isSignup ? (
            <h2 className="popup__title">Вы успешно зарегистрировались!</h2>
          ) : (
            <h2 className="popup__title">Что-то пошло не так! Попробуйте ещё раз.</h2>
          )}
            </div>
        </section>
    );
}

export default InfoTooltip;