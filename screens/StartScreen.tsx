import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                maxLength={2}
                keyboardType={'number-pad'}
                autoCapitalize={"none"}
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton style={styles.buttonStyles}>Reset</PrimaryButton>
                <PrimaryButton style={styles.buttonStyles}>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#3f002f',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25,
        alignItems: 'center'
    },
    input: {
        fontSize: 32,
        borderBottomColor: '#ddb25f',
        borderBottomWidth: 2,
        color: '#ddb25f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    buttonStyles: {
        flexBasis: '45%'
    }
});