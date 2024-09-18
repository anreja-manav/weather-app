const input = document.querySelector("input");
const btn = document.querySelector(".srch-btn");
const temp = document.querySelector("h1");
const city = document.querySelector(".city h3");
const weatherImg = document.querySelector("#weather-icon");
const humidity = document.querySelector("#Humidity");
const windSpeed = document.querySelector("#Wind-speed");

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let cityName = input.value;
    const URL = `${baseUrl}${cityName}&appid=c64e981fb364c9967f79f473974421f6&units=metric`;
    let response = await fetch(URL);
    let data = await response.json(); 
    temp.innerHTML = `${Math.round(data.main.temp)} °C`;
    city.innerText = data.name;
    humidity.innerText = `Humidity ${Math.round(data.main.humidity)}%`;
    windSpeed.innerText = `Wind Speed ${Math.round(data.wind.speed)}km/h`;

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTv9PoZkfKFfiJA_YZGYSOE8a9wjJK3fwWCA&s";
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFckqvahf4gwfKSFyTRLuB-DN1iHzSgIEtA&s";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "https://img.freepik.com/premium-vector/weather-meteorology-icon-cloud-fog-vector-illustration-weather-forecast-symbol-mobile-web_646072-163.jpg";
    } 
})


