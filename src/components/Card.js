function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }  
    
    return (
        <div className="card">
            <button className="card__delete-button" type="button" />
            <img className="card__image" src={props.card.link} alt={`Фото ${props.card.name}.`} onClick={handleClick} />
            <div className="card__caption">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like">
                <button className="card__like-button" type="button"></button>
                <span className="card__like-number">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
  } 
  
  export default Card; 