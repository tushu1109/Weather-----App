let apikey = "847ec550175d1242227d39380f48116b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImg = document.querySelector(".weather_img");

async function getWeatherData(){
    if(userCity.value == "")
    {
        alert("ENTER A CITY NAME")
    }
    else{
        city = userCity.value;
    }
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    let data = await response.json();
    ct.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windInfo.innerHTML = data.wind.speed + "km/h";

    userCity.value="";
    if (data.weather[0].main=="Clear") {
        weatherImg.src="clear.png"
    } else if (data.weather[0].main=="Snow") {
        weatherImg.src="https://static.vecteezy.com/system/resources/previews/024/683/420/original/3d-icon-day-snow-weather-forecast-illustration-concept-icon-render-png.png"
    } else if (data.weather[0].main=="Clouds") {
        weatherImg.src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-sunny-icon-png-image_450296.jpg"
    } else if (data.weather[0].main=="Drizzle") {
        weatherImg.src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png"
    } else if (data.weather[0].main=="Rain") {
        weatherImg.src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Image-File.png"
    }
}