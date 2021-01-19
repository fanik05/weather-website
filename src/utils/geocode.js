const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmFuaWswNSIsImEiOiJja2p6bHIxNGQwOHU3MndwZWlscWVtcDV5In0.iYasGZLn0EDuMV9c1LOTpw&limit=1'

    request({ url, json: true }, (error, { body: { features } } =  {}) => {
        if (error) {
            callback('Unable to conncet to location service!', undefined)
        } else if (features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode