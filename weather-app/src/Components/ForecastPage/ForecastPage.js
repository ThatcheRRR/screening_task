import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { withForecast } from '../hoc/withForecast';
import Map from '../Map/Map';
import Alert from '../Alert/Alert';
import { styles } from '../../styles/styles';

const ForecastPage = ({ weather, temperature, lat, lng, city, submitHandler, dateTime, error }) => {
    const [text, setText] = useState('');

    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Forecast</Text>
            <TextInput
                placeholder = 'Введите город'
                onChangeText = {(value) => setText(value)}
                value = {text}
                style = {styles.input}
                onSubmitEditing = {() => submitHandler(text)}
            />
            {!error &&
            <>
            <Text style = {styles.text}>Время запроса: {dateTime}</Text>
            <Text style = {styles.text}>Координаты: {lat}, {lng}</Text>
            <Text style = {styles.text}>Город: {city}</Text>
            <Text style = {styles.text}>Температура: {temperature}</Text>
            <Text style = {styles.text}>{weather}</Text>
            <Map />
            </>}
            {error && <Alert />}
        </View>
    );
};

export default withForecast(ForecastPage);