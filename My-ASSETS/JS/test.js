//Geolocapation Api


// navigator.geolocation Object

if(navigator.geolocation){
   // console.log('Your browser supports Geolocation API!')
   navigator.geolocation.getCurrentPosition(success,error, {
    maximimAge: 10*60*1000,
    temeout:0
   });

}else{
    
    console.log('Your browser does not supports Geolocation API! ')
}

function success (position){
    //console.log(position);
    const lat = position.coords.latitude;
    const Ing = position.coords.longitude;
    console.log(lat, Ing);
    console.log('https://www.google.com/maps/@&{lat},&{lng}')// eto iz google map adress  uberaesh chisli i stavlayesh &{lat},&{lng} i on rabotaet
}

function error (error){
    alert ('we could not get your current location');
    console.log(error.code);
}

const watcher = navigator.geolocation.watchPosition(success);
setTimeout(() =>{
    navigator.geolocation.clearWatch(watcher)
}, 15000);




