import { Text, View, StyleSheet } from "react-native";
import { useFonts, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';

export default function TitleComponent({
    children
}: React.PropsWithChildren<{}>
) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Manrope_800ExtraBold',
        fontSize: 24,
        fontWeight: "800",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
    }
})