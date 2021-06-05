
//obtenedor de ubicacion al cargar la pag
const fetchData = position =>
{
    const {latitude, longitude} =position.coords;
    const url = "https://www.metaweather.com/api/location/search/?lattlong="
   
    fetch(`${url}${latitude},${longitude}`)
    .then(Response => response.json())
    .then(data => console.log(data));
        
        



    console.log(position)
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}