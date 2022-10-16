// wheather app

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector('form')
const weather = document.querySelector('#weather')
const search = document.querySelector('#search')

const getWeather = async (city) => {
    weather.innerHTML = `<h>Loading</h>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data)
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h4>City Not Found</h4>`
        return;
    }
    weather.innerHTML = `
        <div class="row" id="weather">
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"" alt="img">
        </div>
        <div>
            <h3>${data.main.temp} °C</h3>
            <h5>${data.weather[0].main}</h5>
        </div>
      </div>
     `
}

form.addEventListener('submit', function (event) {
    getWeather(search.value);
    event.preventDefault();
}
)