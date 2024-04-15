const apiKey = "8376346025a6eca192891d55db881f22"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let getInputbtn = document.querySelector("#inputBtn");

    let name = getInputbtn.addEventListener("click" , () => {
        let cityInput = document.querySelector("#inputCity").value;
        checkWeather(cityInput);
        console.log(cityInput);
    });

async function checkWeather(name){
    const response = axios.get(apiUrl + name +`&apiKey=${apiKey}`);
    var data = await response;

    console.log(data);

    document.querySelector(".city").innerHTML = data.data.name + ",";
    document.querySelector(".country").innerHTML = data.data.sys.country;
    document.querySelector(".temp").innerHTML = data.data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.data.wind.speed + "km/h";
}


 