function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "0576548be9ae427392d82505262102";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerHTML = "City not found!";
            } else {
                const temperature = data.current.temp_c;
                const condition = data.current.condition.text;

                document.getElementById("weatherResult").innerHTML =
                    `Temperature in ${data.location.name}: ${temperature}°C <br> Condition: ${condition}`;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = "Error fetching data!";
        });
}
