import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaList from './components/MediaList';
import avatar from "./images/avatar.jpg"
import * as serviceWorker from './serviceWorker';

const userName = "Alex Guerrero";
const userDate = "Lunes 20 de Octubre de 2019";
const cardDescription = "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man."
const likesNumber = 37;
const isFull = "heart-full";


ReactDOM.render(<MediaList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
