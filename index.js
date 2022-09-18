function getWeather() {
  var country = document.getElementById('weather-search').value;
  const API_KEY = 'CHANGE THIS';
  console.log(country);
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    country +
    '&appid=' +
    API_KEY +
    '&units=metric';
  $.get(url, function (data) {
    document.title = 'BobsterJS Weather - ' + country;
    document.getElementById('location').innerHTML = country;
    document.getElementById('temp').innerHTML =
      'Temperature: ' + data.main.temp + '°C';
    document.getElementById('temp-feels-like').innerHTML =
      'Feels Like: ' + data.main.feels_like + '°C';
    document.getElementById('temp-humidity').innerHTML =
      'Humidity: ' + data.main.humidity + '%';
    document.getElementById('temp-pressure').innerHTML =
      'Pressure: ' + data.main.pressure + ' hPa';

    const str = data.weather[0].description;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById('weather-main').innerHTML = str2;

    document.getElementById('weather-logo').src =
      'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

    document.getElementById('wind-speed').innerHTML =
      'Wind Speed: ' + data.wind.speed + 'm/s';
    document.getElementById('wind-direction').innerHTML =
      'Wind Direction: ' + data.wind.deg + '°';

    let unix_timestamp_1 = data.sys.sunrise;
    let unix_timestamp_2 = data.sys.sunset;
    var date = new Date(unix_timestamp_1 * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    var date2 = new Date(unix_timestamp_2 * 1000);
    var hours2 = date2.getHours();
    var minutes2 = '0' + date2.getMinutes();
    var seconds2 = '0' + date2.getSeconds();
    var formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var formattedTime2 =
      hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);

    document.getElementById('sunrise').innerHTML = 'Sunrise: ' + formattedTime;
    document.getElementById('sunset').innerHTML = 'Sunset: ' + formattedTime2;

    var km = data.visibility / 1000;
    var kmFixed = km.toFixed(1) + ' KM';
    document.getElementById('temp-visibility').innerHTML = kmFixed;

    const airpollutionurl =
      'https://api.openweathermap.org/data/2.5/air_pollution?lat=' +
      data.coord.lat +
      '&lon=' +
      data.coord.lon +
      '&appid=' +
      API_KEY;
    $.get(airpollutionurl, function (data) {
      document.getElementById('pollution-level').innerHTML =
        'Pollution Level: ' + data.list[0].main.aqi;
      document.getElementById('pollution-co').innerHTML =
        'co: ' + data.list[0].components.co;
      document.getElementById('pollution-nh3').innerHTML =
        'nh3: ' + data.list[0].components.nh3;
      document.getElementById('pollution-no').innerHTML =
        'no: ' + data.list[0].components.no;
      document.getElementById('pollution-no2').innerHTML =
        'no2: ' + data.list[0].components.no2;
      document.getElementById('pollution-o3').innerHTML =
        'o3: ' + data.list[0].components.o3;
      document.getElementById('pollution-pm2_5').innerHTML =
        'pm2_5: ' + data.list[0].components.pm2_5;
      document.getElementById('pollution-pm10').innerHTML =
        'pm10: ' + data.list[0].components.pm10;
      document.getElementById('pollution-so2').innerHTML =
        'so2: ' + data.list[0].components.so2;
    });

    const forecasturl =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      data.coord.lat +
      '&lon=' +
      data.coord.lon +
      '&exclude=hourly,minutely,current,alerts&appid=' +
      API_KEY +
      '&units=metric';
    $.get(forecasturl, function (data) {
      document.getElementById('temp-day-1').innerHTML =
        'Temp: ' + data.daily[0].temp.day + '°C';
      document.getElementById('temp-feels-like-1').innerHTML =
        'Feels Like: ' + data.daily[0].feels_like.day + '°C';
      document.getElementById('temp-uv-1').innerHTML =
        'UV Index: ' + data.daily[0].uvi;
      document.getElementById('temp-day-2').innerHTML =
        data.daily[1].temp.day + '°C';
      document.getElementById('temp-feels-like-2').innerHTML =
        'Feels Like: ' + data.daily[1].feels_like.day + '°C';
      document.getElementById('temp-uv-2').innerHTML =
        'UV Index: ' + data.daily[1].uvi;
      document.getElementById('temp-day-3').innerHTML =
        data.daily[2].temp.day + '°C';
      document.getElementById('temp-feels-like-3').innerHTML =
        'Feels Like: ' + data.daily[2].feels_like.day + '°C';
      document.getElementById('temp-uv-3').innerHTML =
        'UV Index: ' + data.daily[2].uvi;
      document.getElementById('temp-day-4').innerHTML =
        data.daily[3].temp.day + '°C';
      document.getElementById('temp-feels-like-4').innerHTML =
        'Feels Like: ' + data.daily[3].feels_like.day + '°C';
      document.getElementById('temp-uv-4').innerHTML =
        'UV Index: ' + data.daily[3].uvi;
      document.getElementById('temp-day-5').innerHTML =
        data.daily[4].temp.day + '°C';
      document.getElementById('temp-feels-like-5').innerHTML =
        'Feels Like: ' + data.daily[4].feels_like.day + '°C';
      document.getElementById('temp-uv-5').innerHTML =
        'UV Index: ' + data.daily[4].uvi;
    });
  });
}

function getDefWeather() {
  console.log('Loaded def weather');
}
