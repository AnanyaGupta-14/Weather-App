const API_KEY = "3adb8db660d5b06a7179f66bff61e039";


async function getWeather() {

 
    const cityInput = document.getElementById("cityInput");

    const city = cityInput.value.trim();



    const error = document.getElementById("error");

    const weatherCard = document.getElementById("weatherCard");


    if (city === "") {

        error.textContent = "Please enter a city name.";

        weatherCard.style.display = "none";

        return;
    }


    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;


    try {

        error.textContent = "Loading...";


        const response = await fetch(url);



        if (!response.ok) {

            throw new Error("Weather data not found");

        }



        const data = await response.json();



        weatherCard.style.display = "block";


        document.getElementById("city").textContent =
            data.name;

        document.getElementById("temperature").textContent =
            `${Math.round(data.main.temp)}°C`;


        document.getElementById("description").textContent =
            data.weather[0].description;




        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;


 
        const windSpeed =
            Math.round(data.wind.speed * 3.6);


        document.getElementById("wind").textContent =
            `${windSpeed} km/h`;


        const weather =
            data.weather[0].main;


  
        let icon = "☀️";



        if (weather === "Clouds") {

            icon = "☁️";

        }

        else if (weather === "Rain") {

            icon = "🌧️";

        }

        else if (weather === "Thunderstorm") {

            icon = "⛈️";

        }

        else if (weather === "Snow") {

            icon = "❄️";

        }

        else if (
            weather === "Mist" ||
            weather === "Fog"
        ) {

            icon = "🌫️";

        }

        else if (weather === "Drizzle") {

            icon = "🌦️";

        }


        document.getElementById("weatherIcon").textContent =
            icon;


        error.textContent = "";


    }

    catch (err) {

        console.log(err);


        weatherCard.style.display = "none";


        error.textContent =
            "City not found or API key is not working.";

    }

}