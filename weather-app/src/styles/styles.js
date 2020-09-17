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
        marginBottom: '20px',
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
    },
    alert: {
        color: '#721c24',
        backgroundColor:'#f8d7da',
        paddingHorizontal: '15px',
        paddingVertical: '20px',
        borderRadius: '20px',
        fontSize: '24px'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        justifyContent: 'space-between'
    },
    cell: {
        marginHorizontal: '0',
        marginVertical: '0',
        display: 'inline',
        maxWidth: '150px',
        alignSelf: 'center',
        flexBasis: '20%',
        marginTop: '15px'
    }
});