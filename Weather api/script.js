const api_key = "55fa57c56fe9c5d2897c3af9bd8f435b";

function search(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key)
        .then(res => res.json())
        .then(data => displayWeather(data))
}
// search("Hyderabad")

function displayWeather(data) {
    console.log(data)
    const { name } = data;
    const { temp, humidity } = data.main;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".temp").innerHTML = (temp - 273.15).toFixed(1) + " °C";
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity+"%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
}

function handleClick(event){
    const val = document.querySelector(".search-bar").value
    search(val);
    // event.preventDefault()
}

document.querySelector(".search-bar").addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        const val = document.querySelector(".search-bar").value
        search(val);
    }
})