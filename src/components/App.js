import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopup(false);
    setIsEditProfilePopup(false);
    setIsAddPlacePopup(false);
    setSelectedCard(null);
  }
 
  return (
    <div className="App">
      <Header />
      <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} handleCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        {<input
          className="popup__input popup__input_type_link"
          id="avatar"
          name="link"
          type="url"
          placeholder="Ссылка на фото"
          required
          minLength="8"
        />}
        {<span className="popup__error" id="about-error"></span>}
      </PopupWithForm>
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        {<input
          className="popup__input popup__input_type_name"
          id="name"
          name="name"
          type="text"
          value="Жак-Ив Кусто"
          required
          minLength="2"
          maxLength="40"
        />}
        {<span className="popup__error" id="name-error"></span>}
        {<input
          className="popup__input popup__input_type_about"
          id="about"
          name="about"
          type="text"
          value="Исследователь океана"
          required
          minLength="2"
          maxLength="200"
        />}
        {<span className="popup__error" id="about-error"></span>}
      </PopupWithForm>
      <PopupWithForm name={'photo'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        {<input
          className="popup__input popup__input_type_title"
          id="title"
          name="name"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />}
        {<span className="popup__error" id="title-error"></span>}
        {<input
          className="popup__input popup__input_type_link"
          id="url"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          minLength="8"
        />}
        {<span className="popup__error" id="url-error"></span>}
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
