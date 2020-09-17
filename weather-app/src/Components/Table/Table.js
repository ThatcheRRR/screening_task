import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getFromHistory } from '../../redux/actions';
import Row from './Row';

function Table() {
    const history = useSelector(state => state.history);
    const dispatch = useDispatch();
    const onPressRow = (id) => {
        dispatch(getFromHistory(history.find(item => item.id === id)));
    }
    const list = history.map(item => {
        return(
            <Row
                onPressRow = {() => onPressRow(item.id)}
                item = {item}
                key = {item.id}
            />
        );
    });
    return (
        <View>
            {list}
        </View>
    );
}

export default Table;