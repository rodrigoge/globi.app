import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import colors from "@/colors";

export default function InputMaskedComponent({
    children,
    onChange
}: React.PropsWithChildren<{ value: string, onChange: (value: string) => void }>
) {
    const [inputValue, setInputValue] = useState('');

    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        const currentDateTime = getCurrentDateTime();
        setInputValue(currentDateTime);

        const [datePart, timePart] = currentDateTime.split(' ');
        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes, seconds] = timePart.split(':').map(Number);
        const isoDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds)).toISOString();
        onChange(isoDate);
    }, []);

    const handleChange = (text: string) => {
        setInputValue(text);

        const [datePart, timePart] = text.split(' ');
        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);

        if (day && month && year && hours !== undefined && minutes !== undefined) {
            const isoDate = new Date(Date.UTC(year, month - 1, day, hours, minutes)).toISOString();
            onChange(isoDate);
        }
    };

    return (
        <View style={styles.field}>
            <Text style={styles.inputText}>{children}</Text>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY HH:mm',
                }}
                style={styles.input}
                value={inputValue}
                onChangeText={handleChange}
            />
        </View>
    );
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
});
