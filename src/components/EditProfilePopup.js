import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
      }, [currentUser]);
    
    function handleChangeName(event) {
        setName(event.target.value);
    }
    
    function handleChangeAbout(event) {
        setAbout(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, about });
    }

    return (
        <PopupWithForm name={'profile'} title='Редактировать профиль' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText='Сохранить'>
          <input
            className="popup__input popup__input_type_name"
            id="name"
            name="name"
            type="text"
            value="Жак-Ив Кусто"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
          />
          <span className="popup__error" id="name-error"></span>
          <input
            className="popup__input popup__input_type_about"
            id="about"
            name="about"
            type="text"
            value="Исследователь океана"
            required
            minLength="2"
            maxLength="200"
            onChange={handleChangeAbout}
          />
          <span className="popup__error" id="about-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;