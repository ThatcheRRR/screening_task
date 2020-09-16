import { INIT } from './types';

export function userLocation() {
    return dispatch => {
        let coords = null;
        function success(pos) {
            const crd = pos.coords;
            coords = `${crd.latitude}, ${crd.longitude}`;
            fetch(`https://api.opencagedata.com/geocode/v1/json?key=50409b6b8c43408ead81d59f9b847c18&q=${coords}&pretty=1&no_annotations=1&`)
                .then(res => res.json())
                .then(data => {
                    const city = `${data.results[0].components.city}, ${data.results[0].components.country}`;
                    dispatch({ type: INIT, coords: coords, city: city });
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