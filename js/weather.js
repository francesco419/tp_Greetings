const API_KEY="175892a65a8954a7bd3cb1666f7a0f6a";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const temperature = document.querySelector("#schild")
        const city =  document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        temperature.innerText = ` / ${data.main.temp}°C / `;
        const weath = document.createElement('i');
        WeatherIcon(weather, data.weather[0].main);
        document.getElementById('weather').appendChild(weath);
        console.log(data.weather[0].main);
    });
}

function WeatherIcon(Weather, Main){
    switch(Main){
        case 'Clouds' :
            Weather.classList.add("fa-solid", "fa-cloud", "fa-2x");
            break;

        case 'Thunderstorm' :
            Weather.classList.add("fa-solid", "fa-cloud-bolt");
            break;

        case 'Drizzle' :
            Weather.classList.add("fa-solid", "fa-cloud-drizzle");
            break;

        case 'Clear' :
            Weather.classList.add("fa-solid", "fa-sun");
            break;

        case 'Snow' :
            Weather.classList.add("fa-solid", "fa-cloud-snow");
            break;

        default : 
            Weather.classList.add("fa-solid", "fa-cloud", "fa-2x");
            break;
    }
}


function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);