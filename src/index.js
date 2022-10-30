import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const buttonEl = document.getElementById('jokeBtn');
buttonEl.addEventListener('click', generateJoke)