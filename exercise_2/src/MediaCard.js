import React, { Component } from "react";
import "./MediaCard.scss";

class MediaCard extends Component {
  render() {
    const cardHeader = (
      <header className="card-header">
        <img className="avatar" src={this.props.avatar} alt="Alex Guerrero"/>
        <div className="card-header-text">
            <h2 className="user-name">{this.props.name}</h2>
            <span className="user-date">{this.props.date}</span>
        </div>
      </header>
    );

    const cardBody = (
      <div className="card-body">
        {this.props.description}
      </div>
    );
    
    const cardFooter = (
      <footer className="card-footer">
        <a className="read-more" href="" title="Leer más">Leer más...</a>
        <a className="likes-group" href="" title="">
          <span className="likes-quantity">{this.props.likes}</span>
          <span className={this.props.heart}>&hearts;</span>
        </a>
      </footer>

    );

    return (
      <div className="card">
        {cardHeader}
        {cardBody}
        {cardFooter}
    </div>
    );
  }
}

export default MediaCard;