const form = document.querySelector('form.search');
const searchInput = document.getElementById('searchInput');
const weatherCard = document.querySelector('.weather-card');
const weatherApiKey = "cf78ba9982e3863f6daf7a79c270cd0b";

const humidity = document.querySelector('.humidity-value');
const wind = document.querySelector('.wind-value');
const temp = document.querySelector('.temp-value');
const icon = document.getElementById('icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (searchInput.value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=${weatherApiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      humidity.innerText = data.main.humidity;
      wind.innerText = Math.round(data.wind.speed);
      temp.innerText = Math.round(data.main.temp);
      if (data.weather.length) {
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      } else {
        icon.src = `https://openweathermap.org/img/wn/02d@4x.png`;
      }
    })
    .catch(() => {
      humidity.innerText = '-';
      wind.innerText = '-';
      temp.innerText = '-';
    });
  }
});
