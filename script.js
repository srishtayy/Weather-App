let weather = {
    apikey: "aa324874241c9905209b0d00e23306da",
    fetchweatherapi: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayingWeather(data));
    },
    displayingWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { visibility } = data;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".symbol").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".Visibility").innerText = "Visibilty: " + visibility;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";


    },
    search: function() {
        this.fetchweatherapi(document.querySelector(".search-box").value);
    }

};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();

});
weather.fetchweatherapi("paris");

function speakcity() {
    let msg = "Weather in" + document.querySelector(".search-box").value;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}