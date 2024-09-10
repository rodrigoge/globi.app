import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import colors from "@/colors";

export default function InputMaskedComponent({
    children
}: React.PropsWithChildren<{}>
) {
    const [date, setDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const currentDate = new Date()
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            return `${day}/${month}/${year}`
        }
        setDate(getCurrentDate())
    })

    return (
        <View style={styles.field}>
            <Text style={styles.inputText}>{children}</Text>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY',
                }}
                style={styles.input}
                value={date}
                onChangeText={text => setDate(text)}
                placeholder="DD/MM/YYYY"
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
        marginTop: 64,
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