import colors from "@/colors";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import '@/interfaces/ButtonComponentProps'
import { ButtonComponentProps } from "@/interfaces/ButtonComponentProps";

export default function ButtonComponent({
    children,
    onPress,
}: ButtonComponentProps) {
    return (
        <View style={styles.modal}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 2,
        height: 70,
        padding: 16,
        marginTop: 80,
    },
    button: {
        fontSize: 24,
        fontWeight: "800",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        borderRadius: 12,
        color: colors.white,
        backgroundColor: colors.red
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        color: colors.white
    }
})