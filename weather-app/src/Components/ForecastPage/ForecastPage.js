import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { withForecast } from '../hoc/withForecast';
import Map from '../Map/Map';
import { styles } from '../../styles/styles';

const ForecastPage = ({ weather, temperature, coords, city }) => {
    const [text, setText] = useState('');

    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Forecast</Text>
            <TextInput
                placeholder = 'Введите город'
                onChangeText = {(value) => setText(value)}
                value = {text}
                style = {styles.input}
            />
            <Text style = {styles.text}>Координаты: {coords}</Text>
            <Text style = {styles.text}>Город: {city}</Text>
            <Text style = {styles.text}>Температура: {temperature}</Text>
            <Text style = {styles.text}>{weather}</Text>
            <Map />
        </View>
    );
};

export default withForecast(ForecastPage);