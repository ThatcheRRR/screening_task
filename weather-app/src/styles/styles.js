import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1000px',
        marginHorizontal: 'auto',
    },
    header: {
        marginTop: '10px',
        display: 'inline',
        fontSize: '24px',
        textAlign: 'center'
    },
    input: {
        height: '30px',
        paddingLeft: '10px',
        borderBottomColor: 'black',
        borderBottomWidth: '1px',
        marginBottom: '15px'
    },
    mapContainer: {
        borderRadius: '50px',
        overflow: 'hidden',
        display: 'inline-block',
        position: 'absolute',
        top: '-140px',
        right: '15px',
        margin: '12px',
        width: '400px',
        height: '400px',
        color: '#ffffff',
        zIndex: '1',
        padding: '6px',
        fontWeight: 'bold',
    },
    text: {
        fontSize: '16px',
        lineHeight: '2rem',
        paddingLeft: '15px'
    }
});