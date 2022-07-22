const request = require('request')
//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0eWFtMTI2Nzg5eXVpIiwiYSI6ImNsMWZyM2RueTBxbmQzcXA4MnBqM2k0b2oifQ.ZjgUgKFK9bR1cjQTgj9dYg&limit=1
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2F0eWFtMTI2Nzg5eXVpIiwiYSI6ImNsMWZyM2RueTBxbmQzcXA4MnBqM2k0b2oifQ.ZjgUgKFK9bR1cjQTgj9dYg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode