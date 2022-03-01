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
        speakcity();



    },
    search: function() {
        this.fetchweatherapi(document.querySelector(".search-box").value);
    }

};
// onclick="speakcity()"
// weather.fetchweatherapi("paris");
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();


});
// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
//     speakcity();

// });


function speakcity() {
    let msg = "Weather in" + document.querySelector(".search-box").value + "The Temperature is " +
        document.querySelector(".temperature").innerText + " with " + document.querySelector(".description").innerText + "         with " + document.querySelector(".humidity").innerText + "whereas   the  " +
        document.querySelector(".Visibility").innerText;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}