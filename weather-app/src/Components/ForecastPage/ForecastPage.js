import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from '../../styles/styles';
import { userLocation } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const ForecastPage = () => {
    const dispatch = useDispatch();
    const coords = useSelector(state => state.coords);
    const city = useSelector(state => state.city);

    useEffect(() => {
        dispatch(userLocation())
    }, [])

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Forecast</Text>
            <Text>Координаты: {coords}</Text>
            <Text>Город: {city}</Text>
        </View>
    );
};

export default ForecastPage;