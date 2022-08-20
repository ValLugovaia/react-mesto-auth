function ImagePopup() {
    return (
        <section className="popup popup_type_view">
            <div className="popup__container-view">
            <button className="popup__close-button" name="close-view" type="button"></button>
            <form className="popup__form-view" name="view">
                <img className="popup__view-photo" src=" " alt=" " />
                <p className="popup__view-title"> </p>
            </form>
            </div>
        </section>
    );
}

export default ImagePopup;