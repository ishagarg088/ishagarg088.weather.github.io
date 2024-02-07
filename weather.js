const apiKey = "1e1a30c98143c1eaa942efb95bad6003";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search-box input");
const searchbtn=document.querySelector(".search-box button");
const weathericon=document.querySelector(".weather-box img");
const weatherdetails=document.querySelector("weather-details");
async function checkweather(city){
    const response=await fetch(apiUrl+ city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".description").innerHTML=data.weather[0].description;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+ "km/h ";
    if(data.weather[0].main=="clouds"){
        weathericon.src="https://w7.pngwing.com/pngs/691/67/png-transparent-blue-sky-lawn-sky-reversal-film-cloud-blue-atmosphere-cloud.png";
    }
    else if(data.weather[0].main=='clear'){
        weathericon.src="file:///C:/Users/harshit%20garg/Downloads/404-page-not-found-4190275-3468592.webp";
    }
    else if(data.weather[0].main=="rain"){
        weathericon.src="file:///C:/Users/harshit%20garg/Downloads/clouds-with-rainfall-background-design_1017-33595.avif";
}
else if(data.weather[0].main=="snow"){
    weathericon.src="https://www.shutterstock.com/image-photo/pine-branch-under-snow-blue-260nw-1875171835.jpg";
}
else if(data.weather[0].main=="mist"){
    weathericon.src="https://s.w-x.co/util/image/w/in-fog_2.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60";
}
    else if(data.weather[0].main=="haze"){
        weathericon.src="https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze-960x640.jpg";
}
    }
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


