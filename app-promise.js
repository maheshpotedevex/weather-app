const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch wheather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.a);
let geocodeurl = `http://www.mapquestapi.com/geocoding/v1/address?key=eBjkjBFzrtbV97d5XLjMA777gPceb13r&location=${encodedAddress}`;

axios.get(geocodeurl)
    .then((response) => {
        var lat = response.data.results[0].locations[0].latLng.lat;
        var lng = response.data.results[0].locations[0].latLng.lng;
        let weatherURL = `https://api.darksky.net/forecast/2235ccae8ff39308ad88badd21ec1da0/${lat}${lng}`;
        // Print location
        console.log(response.data.results[0].providedLocation.location);
        return axios.get(weatherURL);
    }).then((responseweather) => {
        if (responseweather.data.statusCode === 400) {
            //console.log("unable to fetch weather");
        }
        temperature = responseweather.data.currently.temperature;
        apparentTemperature = responseweather.data.currently.apparentTemperature;
        // Print temperature
        console.log(`It's currently ${temperature}. It feel like ${apparentTemperature}.`);
    }).catch((e) => {
        if (e.code === "ENOTFOUND") {
            console.log("Unable to connect to api servers.");
        } else {
            console.log(e.message);
        }
    });