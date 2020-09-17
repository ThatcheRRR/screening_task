import React from "react";
import { View, Text } from "react-native";
import Table from '../Table/Table';
import { styles } from '../../styles/styles';

const HistoryPage = () => (
    <View style = {styles.container}>
        <Text style = {styles.header}>History</Text>
        <Table />
    </View>
);

export default HistoryPage;