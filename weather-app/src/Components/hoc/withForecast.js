import React, { useEffect } from "react";
import { userLocation } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const withForecast = (Wrapped) => {
    return function(props) {
        const dispatch = useDispatch();
        const cords = useSelector(state => state.cords);
        const city = useSelector(state => state.city);
        const temperature = useSelector(state => state.temperature);
        const weather = useSelector(state => state.weather);
    
        useEffect(() => {
            dispatch(userLocation())
        }, []);

        return(
            <Wrapped {...props} cords = {cords} city = {city} temperature = {temperature} weather = {weather} />
        );
    }
}