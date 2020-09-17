import { ERROR, GET_WEATHER, PUSH_INTO_HISTORY, REMOVE_ERROR, GET_FROM_HISTORY } from './types';

export function userLocation() {
    return dispatch => {
        function success(pos) {
            const date = new Date();
            const crd = pos.coords;
            const lat = crd.latitude.toFixed(4);
            const lng = crd.longitude.toFixed(4);
            fetch(`https://api.opencagedata.com/geocode/v1/json?key=50409b6b8c43408ead81d59f9b847c18&q=${lat},${lng}&pretty=1&no_annotations=1&no_annotations=1&language=ru`)
                .then(res => res.json())
                .then(data => {
                    const city = `${data.results[0].components.city}, ${data.results[0].components.country}`;
                    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/29e270d552fb7ddfac1a8c371ae8dc03/${lat},${lng}?lang=ru`)
                        .then(res => res.json())
                        .then(data => {
                            const temperature = `${Math.floor((data.currently.temperature - 32) * (5 / 9))}°`;
                            const weather = data.currently.summary;
                            const dateTime = date.toLocaleString();
                            const id = date.getTime();
                            dispatch({ type: GET_WEATHER, lat, lng, city, temperature, weather, id, dateTime });
                            dispatch({ type: PUSH_INTO_HISTORY, lat, lng, city, temperature, weather, id, dateTime });
                        })
                })
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
    };
}

export function getWeather(text) {
    return async dispatch => {
        try {
            dispatch(removeError());
            const date = new Date();
            const locationResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=50409b6b8c43408ead81d59f9b847c18&q=${text}&pretty=1&no_annotations=1&no_annotations=1&language=ru`);
            const json = await locationResponse.json();
            const city = `${json.results[0].formatted}`;
            const lat = json.results[0].geometry.lat.toFixed(4);
            const lng = json.results[0].geometry.lng.toFixed(4);
            const weatherResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/29e270d552fb7ddfac1a8c371ae8dc03/${lat},${lng}?lang=ru`);
            const weatherJson = await weatherResponse.json();
            const temperature = `${Math.floor((weatherJson.currently.temperature - 32) * (5 / 9))}°`;
            const weather = weatherJson.currently.summary;
            const dateTime = date.toLocaleString();
            const id = date.getTime();
            dispatch({ type: GET_WEATHER, lat, lng, city, temperature, weather, id, dateTime });
            dispatch({ type: PUSH_INTO_HISTORY, lat, lng, city, temperature, weather, id, dateTime });
        } catch(e) {
            dispatch(onError());
        }
    };
}

function onError() {
    return {
        type: ERROR
    }
}

function removeError() {
    return {
        type: REMOVE_ERROR,
    }
}

export function getFromHistory(itemFromHistory) {
    return {
        type: GET_FROM_HISTORY,
        itemFromHistory
    }
}