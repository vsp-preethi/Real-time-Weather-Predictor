async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "YOUR_API_KEY"; // Get from openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        document.getElementById('weatherResult').innerHTML = "❌ City not found!";
        return;
    }
    
    const data = await response.json();
    document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>🌡 ${data.main.temp}°C</h3>
        <p>${data.weather[0].description}</p>
    `;
}
