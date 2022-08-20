import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
/*
const props = [
  {
    name: 'profile',
    title: 'Редактировать профиль'
  },
  {
    name: 'photo',
    title: 'Новое место'
  },
  {
    name: 'delete',
    title: 'Вы уверены?'
  },
  {
    name: 'avatar',
    title: 'Обновить аватар'
  }
]
*/
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopup] = useState([false]);
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = useState([false]);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState([false]);

  function handleEditProfileClick() {
    setIsEditProfilePopup(true);
    /*const popupProfile = document.querySelector('.popup_type_profile'); 
    popupProfile.classList.add('popup_opened');*/
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopup(true);
    /*const popupPhoto = document.querySelector('.popup_type_photo'); 
    popupPhoto.classList.add('popup_opened');*/
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
    /*const popupAvatar = document.querySelector('.popup_type_avatar');
    console.log(popupAvatar)
    // popupAvatar.classList.add('popup_opened');*/
  }
  
  return (
    <div className="App">
      <Header />
      <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm name={['profile', 'photo', 'delete', 'avatar']} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} />
      <ImagePopup />
    </div>
  );
}

export default App;
