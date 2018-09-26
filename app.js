const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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
//console.log(argv.a); 
geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        let jsonString = JSON.stringify(result, undefined, 2);
        weather.getWeather(result.latitude, result.lagitude, (errorMessage, weatherResult) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResult.temperature}. It is feel like ${weatherResult.apparentTemperature}`);
            }
        });
    }
});