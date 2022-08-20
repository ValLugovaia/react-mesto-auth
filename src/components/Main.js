function Main(props) {

  const onEditProfile = () => props.handleEditProfileClick();

  const onAddPlace = () => props.handleAddPlaceClick();

  const onEditAvatar = () => props.handleEditAvatarClick();

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__item">
            <div className="profile__avatar">
              <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__description">
              <div className="profile__heading">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__about">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__photo-add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="photo"> </section>
      </main>
  );
}

export default Main;