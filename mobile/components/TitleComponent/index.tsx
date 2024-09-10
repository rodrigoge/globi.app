import { Text, View, StyleSheet } from "react-native";
import colors from '@/colors';

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
        fontSize: 24,
        fontWeight: "800",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        color: colors.black
    }
})