import React from "react";
import { View, Text } from "react-native";
import { styles } from '../../styles/styles';
import { withCoords } from '../hoc/withCoords';

const ForecastPage = ({coords}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Forecast</Text>
            <Text>{coords}</Text>
        </View>
    );
};

export default withCoords(ForecastPage);