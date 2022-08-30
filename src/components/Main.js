import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setInitialCards] = useState([]);

  const onEditAvatar = () => props.handleEditAvatarClick();
  const onEditProfile = () => props.handleEditProfileClick();
  const onAddPlace = () => props.handleAddPlaceClick();
  const onCardClick = (card) => props.handleCardClick(card);

  function getUserInfo() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setInitialCards(
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

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__item">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar}>
              <button className="profile__avatar-edit-button" type="button"></button>
            </div>
            <div className="profile__description">
              <div className="profile__heading">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__about">{userDescription}</p>
            </div>
          </div>
          <button className="profile__photo-add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="photo">{cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
        ))}</section>
      </main>
  );
}

export default Main;