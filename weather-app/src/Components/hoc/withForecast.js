import React, { useEffect } from "react";
import { userLocation, getWeather } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const withForecast = (Wrapped) => {
    return function(props) {
        const dispatch = useDispatch();
        const lat = useSelector(state => state.weather.lat);
        const lng = useSelector(state => state.weather.lng);
        const city = useSelector(state => state.weather.city);
        const temperature = useSelector(state => state.weather.temperature);
        const weather = useSelector(state => state.weather.weather);
        const dateTime = useSelector(state => state.weather.dateTime);
        const error = useSelector(state => state.app.error)
    
        useEffect(() => {
            dispatch(userLocation())
        }, []);

        const submitHandler = (city) => {
            dispatch(getWeather(city));
        }

        return(
            <Wrapped
                {...props}
                lat = {lat}
                lng = {lng}
                city = {city}
                temperature = {temperature}
                weather = {weather}
                dateTime = {dateTime}
                error = {error}
                submitHandler = {submitHandler}
            />
        );
    }
}