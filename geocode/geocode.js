const request = require('request');
let geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=eBjkjBFzrtbV97d5XLjMA777gPceb13r&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to google server.');
        } else if (body.info.statuscode === 0) {
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                lagitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;