import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "@/colors";

export default function InputNumberComponent({
    children,
    value,
    onChange
}: React.PropsWithChildren<{ value: string, onChange: (value: string) => void }>
) {

    const handleInputChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        onChange(numericValue);
    };

    return (
        <View style={styles.field}>
            <Text style={styles.inputText}>{children}</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={3}
                value={value}
                onChangeText={handleInputChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 2,
        height: 70,
        padding: 16,
        marginTop: 36,
    },
    input: {
        borderRadius: 12,
        backgroundColor: colors.grey,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 12,
        height: 70,
        paddingLeft: 24,
        fontSize: 24,
        color: colors.black
    },
    inputText: {
        color: colors.black,
        fontSize: 16
    }
})