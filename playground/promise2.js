const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=eBjkjBFzrtbV97d5XLjMA777gPceb13r&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to google server.');
            } else if (body.info.statuscode === 0) {
                resolve({
                    address: body.results[0].providedLocation.location,
                    latitude: body.results[0].locations[0].latLng.lat,
                    lagitude: body.results[0].locations[0].latLng.lng
                });
            }
        });
    });
};

geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});