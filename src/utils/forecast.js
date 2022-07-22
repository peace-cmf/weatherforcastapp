const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5d7c89693a8938f8746740bd8fbb53c6&query='+latitude+','+longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '.It is currently ' + body.current.temperature + ' degress out. Feels Like ' + body.current.feelslike+ '. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast