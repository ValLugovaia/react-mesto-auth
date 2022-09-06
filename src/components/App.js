import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  
  function getUserInfo() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setCurrentUser({ ...currentUser,
          name: data.name,
          about: data.about,
          avatar: data.avatar,
          _id: data._id });
        setCards(
          cards.map((card) => ({
            name: card.name,
            link: card.link,
            likes: card.likes,
            _id: card._id,
          }))
        );
      })
      .catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((deleteCard) => {
        setCards((state) => state.filter((deleteCard) => deleteCard._id !== card._id));
      });
  }

  function handleUpdateUser({ name, about }) {
    api.changeUserInfom({ name, about }).then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
  }

  function handleUpdateAvatar({ avatar }) {
    api.editAvatar({ avatar }).then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
  }

  function handleAddPlaceSubmit(data) {
    api.addCardApi(data).then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} handleCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards} />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
