import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../styles/styles';

function Cell({ info }) {
    return (
        <Text style = {styles.cell}>{info}</Text>
    );
}

export default Cell;