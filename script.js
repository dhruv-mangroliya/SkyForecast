const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ab3b4b8890msh1a1bf5fe375b37ep15a8afjsne99bbf531b3f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
        })
        .catch(err => console.log(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})
getweather('Delhi');

function getweather2(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            Mumbai_temp.innerHTML = response.temp;
            Mumbai_feels_like.innerHTML = response.temp;
            Mumbai_humidity.innerHTML = response.humidity;
            Mumbai_min_temp.innerHTML = response.min_temp;
            Mumbai_max_temp.innerHTML = response.max_temp;
            Mumbai_wind_speed.innerHTML = response.wind_speed;
            Mumbai_wind_degrees.innerHTML = response.wind_degrees;
            Mumbai_cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.log(err));
}
getweather2('Mumbai');

function getweather3(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            Moscow_temp.innerHTML = response.temp;
            Moscow_feels_like.innerHTML = response.temp;
            Moscow_humidity.innerHTML = response.humidity;
            Moscow_min_temp.innerHTML = response.min_temp;
            Moscow_max_temp.innerHTML = response.max_temp;
            Moscow_wind_speed.innerHTML = response.wind_speed;
            Moscow_wind_degrees.innerHTML = response.wind_degrees;
            Moscow_cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.log(err));
}
getweather3('Moscow');

function getweather4(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            London_temp.innerHTML = response.temp;
            London_feels_like.innerHTML = response.temp;
            London_humidity.innerHTML = response.humidity;
            London_min_temp.innerHTML = response.min_temp;
            London_max_temp.innerHTML = response.max_temp;
            London_wind_speed.innerHTML = response.wind_speed;
            London_wind_degrees.innerHTML = response.wind_degrees;
            London_cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.log(err));
}
getweather4('London');

function getweather5(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            Paris_temp.innerHTML = response.temp;
            Paris_feels_like.innerHTML = response.temp;
            Paris_humidity.innerHTML = response.humidity;
            Paris_min_temp.innerHTML = response.min_temp;
            Paris_max_temp.innerHTML = response.max_temp;
            Paris_wind_speed.innerHTML = response.wind_speed;
            Paris_wind_degrees.innerHTML = response.wind_degrees;
            Paris_cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.log(err));
}
getweather5('Paris');

function getweather6(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            Berlin_temp.innerHTML = response.temp;
            Berlin_feels_like.innerHTML = response.temp;
            Berlin_humidity.innerHTML = response.humidity;
            Berlin_min_temp.innerHTML = response.min_temp;
            Berlin_max_temp.innerHTML = response.max_temp;
            Berlin_wind_speed.innerHTML = response.wind_speed;
            Berlin_wind_degrees.innerHTML = response.wind_degrees;
            Berlin_cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.log(err));
}
getweather6('Berlin');