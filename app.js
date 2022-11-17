window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDescription = document.querySelector(".temperature-description");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={YourKey}&units=metric`;
        
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
        
                const {temp} = data.main;
                const name = data.name;
                const {main} = data.weather[0];
                //Set DOM Elements from the API
                temperatureDegree.textContent = temp;
                locationTimezone.textContent = name;
                temperatureDescription.textContent = main;
            });
        });
    }
});


