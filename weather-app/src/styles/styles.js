import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
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
    text: {
        fontSize: '16px',
        lineHeight: '2rem',
        paddingLeft: '15px'
    },
    mapContainer: {
        position: 'absolute',
        height: '400px',
        width: '400px',
        top: '100px',
        right: '20px',
        overflow: 'hidden',
        borderRadius: '50px'
    }
});