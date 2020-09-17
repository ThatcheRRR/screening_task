import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';
import Cell from './Cell';

function Row({ item, onPressRow }) {
    return (
        <TouchableOpacity onPress = {onPressRow} style = {styles.row}>
            <Cell info = {`${item.lat}, ${item.lng}`} />
            <Cell info = {item.city} />
            <Cell info = {item.temperature} />
            <Cell info = {item.weather} />
            <Cell info = {item.dateTime} />
        </TouchableOpacity>
    );
}

export default Row;