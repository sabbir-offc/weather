const apiKey = 'e02799ed7b243df1c9dff8e084b5b8c2';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-btn');

const weatherImage = (weather) => {
    // console.log(weather)
    if (weather === 'Haze') {
        return './images/humidity.png';
    } else if (weather === 'Clouds') {
        return './images/clouds.png';
    } else if (weather === 'Clear') {
        return './images/clear.png';
    } else if (weather === 'Rain') {
        return './images/rain.png';
    } else if (weather === 'Drizzle') {
        return './images/drizzle.png';
    } else if (weather === 'Mist') {
        return './images/mist.png';
    } else {
        return './images/sun.png';
    }
}
const getWeather = async (city) => {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json()
    const weather = document.getElementById('weather-container');
    if (response.status === 404) {
        alert('Please Enter a valid city name');

    }
    else {
        weather.innerHTML = `
    <div>
                        <img draggable="false" src="${weatherImage(data.weather[0].main)}" class="mx-auto my-6" id="weather-icon" alt="">
                        <h1 class="text-7xl font-medium" id="temp">${Math.round(data.main.temp)}°C</h1>
                        <p class="text-xl mb-3">${data.weather[0].description}</p>
                        <h2 class="text-2xl font-normal my-3">Feels Like ${data.main.feels_like}</h2>
                        <h2 class="text-5xl font-normal mt-3">${data.name}</h2>
                    </div>
                    <div id="details" class="flex items-center justify-between px-10 mt-12">
                        <div class="flex items-center text-left">
                            <img src="./images/humidity.png" alt="" class="mx-auto w-10 mr-2">
                            <div>
                                <p class="text-2xl">${data.main.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div class="flex items-center text-left">
                            <img src="./images/wind.png" alt="" class="mx-auto w-10 mr-2">
                            <div>
                                <p class="text-2xl">${data.wind.speed} km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>

                    </div>
    `
    }

};

searchButton.addEventListener('click', () => {
    if (searchBox.value) {
        getWeather(searchBox.value)


    } else {
        alert('Please Enter a valid city name');
    }

})
getWeather('bangladesh')

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
   });