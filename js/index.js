
//obtenedor de ubicacion al cargar la pag
 
const fetchData = position =>
    {
        const url = "https://www.metaweather.com/api/location/search/?lattlong="
        const {latitude, longitude} =position.coords;
        const newurl = "https://www.metaweather.com/api/location/"
        
        var urlformatted = `${url}${latitude},${longitude}`;
        var newUrl =`https://www.metaweather.com/api/location/${data[0].woeid}`;
                      console.log(newUrl);
       
        fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`)
        .then(Response => Response.json())
        .then(data => {
            let element = document.getElementById('elem')
            element.innerHTML =  `<p>${data.title} </p>`
            
            console.log(`La temperatura promedio es ${data.consolidated_weather[0].the_temp}°C`)})
    
        .catch(err=> console.log())


    console.log(position)
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}