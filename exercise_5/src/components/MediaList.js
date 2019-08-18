import React from "react";
import "../MediaCard.scss";
import MediaCard from "./MediaCard";
import avatar from "../images/avatar.jpg"

class MediaList extends React.Component {
    render() {
      return (
        <main className="section-cards">
            <h1>My Media Cards APP</h1>
            <ul className="section-card-list">
                <li><MediaCard 
                        name = "Alex Guerrero"
                        date = "Lunes 14 de Abril de 2019"
                        description = "Esta es la vida de Alex Guerrero. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        likes = {27}
                        heart = "heart-full"
                        avatar = {avatar}
                    />
                </li>
                <li><MediaCard 
                        name = "Paco Pérez"
                        date = "Martes 10 de Febrero de 2019"
                        description = "Esta es la vida de Paco Pérez. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        likes = {0}
                        heart = "heart-empty"
                        avatar = {avatar}
                    />
                </li>
                <li><MediaCard 
                        name = "Carolina Sánchez"
                        date = "Lunes 2 de Julio de 2019"
                        description = "Esta es la vida de Carolina. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        likes = {3}
                        heart = "heart-full"
                        avatar = {avatar}
                    />
                </li>
            </ul>
        </main>
      );
    }
  }

export default MediaList;