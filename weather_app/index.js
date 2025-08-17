async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "YOUR_API_KEY"; // replace with your OpenWeather API key
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;


  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("City not found");
    }
    let data = await res.json();
    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
