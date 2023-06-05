const keyweather = 'a04260457def2b62c3d641eeecb410bc';
const lat = 44.34;
const lon = 10.99;

const name = document.getElementById('name');
const description = document.getElementById('description');
const coord = document.getElementById('cloud');

const currentWeather = async (weather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyweather}`;
    const response = await fetch(url);
    console.log.(response.json());
    const data = await response.json();
    console.log('data  solamente: 5t gb')

}
currentWeather();