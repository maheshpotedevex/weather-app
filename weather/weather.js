const request = require('request');

let getWeather = (latitude, lagitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2235ccae8ff39308ad88badd21ec1da0/${latitude},${lagitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forcast.io server.');
        } else if (response.statusCode === 400) {
            callback('unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable t fetch weather.');
        }

    });
};
module.exports.getWeather = getWeather;