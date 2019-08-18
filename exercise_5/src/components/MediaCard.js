import React from "react";
import "../MediaCard.scss";

const MediaCard = ({name,avatar,date,description,likes,heart}) => (
  <div className = "card">
      <header className="card-header">
        <img className="avatar" src={avatar} alt="Alex Guerrero"/>
        <div className="card-header-text">
            <h2 className="user-name">{name}</h2>
            <span className="user-date">{date}</span>
        </div>
      </header>
      <div className="card-body">
        {description}
      </div>
      <footer className="card-footer">
        <a className="read-more" href="" title="Leer más">Leer más...</a>
        <a className="likes-group" href="" title="">
          <span className="likes-quantity">{likes}</span>
          <span className={heart}>&hearts;</span>
        </a>
      </footer>
  </div>
);

MediaCard.defaultProps = {
  heart : "heart-empty",
  likes : 0
}

export default MediaCard;