import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/images/logo.svg';
import { useFonts, Manrope_400Regular, Manrope_700Bold } from '@expo-google-fonts/manrope';

export default function HeaderComponent() {
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
    });

    return (
        <View style={styles.container}>
            <Logo width={30} height={30} />
            <Text style={styles.text}>Globi.app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 6,
        marginTop: 60,
        height: 70,
        padding: 16,
    },
    logo: {
        width: 30,
        height: 30
    },
    text: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 20
    }
})