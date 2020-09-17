import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';

function Alert() {
    return(
        <View style = {styles.alert}>
            <Text>Ошибка при поиске города. Проверьте правильность ввода</Text>
        </View>
    );
}

export default Alert;