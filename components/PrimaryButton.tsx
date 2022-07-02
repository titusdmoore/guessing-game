import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton(props: any) {
    const { children, style } = props;

    const pressHandler = () => {
        console.log("Pressed")
    }

    return (
        <Pressable
            onPress={pressHandler}
            style={({pressed}) => pressed ? [styles.buttonContainer, styles.pressed, style] : [styles.buttonContainer, style]}
            android_ripple={{ color: '#54002a' }}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable >
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: .75
    }
})
