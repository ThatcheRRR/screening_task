import { INIT } from './types';

export function userLocation() {
    return dispatch => {
        function success(pos) {
            const crd = pos.coords;
            const cords = [crd.latitude.toFixed(4), crd.longitude.toFixed(4)];
            fetch(`https://api.opencagedata.com/geocode/v1/json?key=50409b6b8c43408ead81d59f9b847c18&q=${cords}&pretty=1&no_annotations=1&`)
                .then(res => res.json())
                .then(data => {
                    const city = `${data.results[0].components.city}, ${data.results[0].components.country}`;
                    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/29e270d552fb7ddfac1a8c371ae8dc03/${cords}?lang=ru`)
                        .then(res => res.json())
                        .then(data => {
                            const temperature = `${Math.floor((data.currently.temperature - 32) * (5 / 9))}°`;
                            const weather = data.currently.summary;
                            dispatch({ type: INIT, cords, city, temperature, weather });
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