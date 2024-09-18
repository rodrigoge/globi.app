import colors from "@/colors";
import { StyleSheet, Text, View } from "react-native";

interface Glycemia {
    glycemicIndex: number;
    creationDate: string;
}

export default function ItemComponent({
    glycemicIndex,
    creationDate
}: Glycemia) {
    return(
        <View style={styles.card}>
            <View style={styles.glycemicIndex}>
                <Text style={styles.value}>{glycemicIndex}</Text>
                <Text style={styles.measure}>mg/dL</Text>
            </View>
            <Text style={styles.date}>{creationDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        gap: 12,
        height: 120,
        width: '100%',
        padding: 16,
        marginTop: 32,
        backgroundColor: colors.grey,
        borderRadius: 12
    },
    glycemicIndex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 64,
        width: 86,
        height: 86,
        backgroundColor: colors.red,
        
    },
    value: {
        fontSize: 32,
        fontWeight: "600",
        color: colors.white,
    },
    measure: {
        color: colors.white,
    },
    date: {
        color: colors.black,
        fontSize: 20,
    }
})