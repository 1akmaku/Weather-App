class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.maxTemp = document.getElementById('w-maxtemp');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;;
        this.string.textContent = Math.round(weather.main.temp-273) + "℃";
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.maxTemp.textContent = `Maximum Temperature: ${Math.round(weather.main.temp_max-273)} ℃`;
        this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    }
}