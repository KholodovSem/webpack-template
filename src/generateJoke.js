import axios from 'axios'

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const result = await (await axios.get('https://icanhazdadjoke.com', config)).data.joke;
    const divEl = document.getElementById('joke');
    divEl.textContent = result
}

export default generateJoke;