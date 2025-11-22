const apiKey = "624bebdfae44fd29f6c74e96a006d321";

const weatherIcons = {
  "01d": "./assets/sunny.png",
  "01n": "./assets/sunny.png",
  "02d": "./assets/cloudy.png",
  "02n": "./assets/cloudy.png",
  "03d": "./assets/scattered-clouds.png",
  "03n": "./assets/scattered-clouds.png",
  "04d": "./assets/broken-clouds.png",
  "04n": "./assets/broken-clouds.png",
  "09d": "./assets/rain.png",
  "09n": "./assets/rain.png",
  "10d": "./assets/sun-rain.png",
  "10n": "./assets/sun-rain.png",
  "11d": "./assets/thunderstorm.png",
  "11n": "./assets/thunderstorm.png",
  "13d": "./assets/snow.png",
  "13n": "./assets/snow.png",
  "50d": "./assets/mist.png",
  "50n": "./assets/mist.png",
};

//Funcion de letra capital
function capitalize(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

//Funcion para mostrar alerta de SweetAleert
function mostrarAlerta(icon, message) {
  Swal.fire({
    icon,
    title: "Oops...",
    text: message,
    confirmButtonText: "Aceptar",
  });
}


$(document).ready(function () {
  const inputCity = $("#input-city");

  //funcion para hacer mover el cuadro de texto con error
  function setInputError() {
    inputCity.addClass("is-invalid animate__shakeX");
  }

  //Funcion para borrar espacios en el valor ingresado
  function getCity() {
    return inputCity.val().trim();
  }

  function displayWeatherInfo(data) {
    $("#loading").addClass("d-none");
    $("#card-info").removeClass("d-none");
    $("#weather-img").attr("src", weatherIcons[data.weather[0].icon]);
    $("#weather-description").text(capitalize(data.weather[0].description));
    $("#weather-temperature").text(data.main.temp + "°");
    $("#card-text").text(data.weather[0].description);
    $("#feelsLike").text(data.main.feels_like);
    $("#tempMin").text(data.main.temp_min);
    $("#tempMax").text(data.main.temp_max);
    $("#windSpeed").text(data.wind.speed);
    $("#humidity").text(data.main.humidity);
    $("#pressure").text(data.main.pressure);
    $("#visibility").text(data.visibility);
    $("#clouds").text(data.clouds.all);
  }

  function getLocalData() {
    $.getJSON("./example-response.json", function (data) {
      displayWeatherInfo(data);
    });
  }

  function makeRequest(cityName) {
    $.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        apiKey +
        "&lang=es" +
        "&units=metric",
      function (response) {
        displayWeatherInfo(response);
      }
    )
    
    //Metodo para validar error al cargar la pagina o error diferente
    .fail(function (error) {
      $("#loading").addClass("d-none");
      if (error.status === 404) {
        mostrarAlerta("warning", "Ciudad no encontrada.");
      } else {
        mostrarAlerta(
          "error",
          "Ha sucedido un error, por favor intenta de nuevo más tarde."
        );
      }
    });
  }

  //Funcion para mostrar spinner y ocultar card mienstras esta haciendo loading
  function isValidInput(text) {
    if (text !== "") {
      $("#loading").removeClass("d-none");
      $("#card-info").addClass("d-none");
      return true;
    } else {
      setInputError();
      return false;
    }
  }

  function processSearch() {
    const city = getCity();

    if (!isValidInput(city)) {
      setInputError();
      return;
    }
    // Funciones que permiten usar el app local y con api
    //makeRequest(city);
    getLocalData();
  }

  $("#btn-search").click(function () {
    processSearch();
  });

  inputCity.on("input", function () {
    if (inputCity.val().trim() === "") {
      setInputError();
    } else {
      inputCity.removeClass("is-invalid animate__shakeX");
    }
  });

  inputCity.on("keydown", function (e) {
    const city = getCity();
    if (e.key === "Enter") {
      processSearch();
    }s
  });
});
