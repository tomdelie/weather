const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const weatherCard = document.querySelector('.weather-card');
const weatherApiKey = "cf78ba9982e3863f6daf7a79c270cd0b";

const cityName = document.getElementById('city');
const temp = document.getElementById('temp');
const icon = document.getElementById('icon');

searchButton.addEventListener('click', () => {
  if (searchInput.value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=${weatherApiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      cityName.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}°`;
      if (data.weather.length) {
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      } else {
        icon.src = `https://openweathermap.org/img/wn/02d@2x.png`;
      }

      weatherCard.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
});
