import { Text, View, StyleSheet } from "react-native";
import colors from '@/colors';

export default function SubtitleComponent({
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
        fontSize: 16,
        fontWeight: "500",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 0,
        color: colors.black
    }
})