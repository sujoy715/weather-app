const apikey="44d4711ddf9767f137f39c4e9ab74e2d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const weathericon=document.querySelector(".weather");
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="clear"){
        weathericon.src="images/clear.png"
    }
    else if(data.weather[0].main=="drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="mist"){
        weathericon.src="images/mist.png"
    }
    else if(data.weather[0].main=="rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main=="snow"){
        weathericon.src="images/snow.png"
    }

}

searchbutton.addEventListener("click",()=>{
    checkWeather(searchbox.value);
});

