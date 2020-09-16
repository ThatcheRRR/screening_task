import React, { useEffect } from "react";

export const withCoords = (Wrapped) => {
    return function(props) {
        function success(pos) {
            const crd = pos.coords;
            usersLocationWeather(crd);
        }
    
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        async function usersLocationWeather(crd) {
            const pos = `${crd.latitude}, ${crd.longitude}`;
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=50409b6b8c43408ead81d59f9b847c18&q=${pos}&pretty=1&no_annotations=1&`);
            const json = await response.json();
            const city = 
            console.log(json.results[0].components)
        }

        useEffect(() => {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }, []);

        return (
            <Wrapped {...props} />
        );
    }
}