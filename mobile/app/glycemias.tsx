import { Text, View } from "react-native";
import { RouteProp } from '@react-navigation/native'; // Para tipagem de rota

interface Glycemia {
    id: number;
    glycemicIndex: number;
    creationDate: string;
}

type RootStackParamList = {
    Glycemias: { days: Glycemia[] };
};

type GlycemiasScreenRouteProp = RouteProp<RootStackParamList, 'Glycemias'>;

export default function Glycemias({ days }: { days: GlycemiasScreenRouteProp }) {

    return (
        <View>
            {Array.isArray(days) && days.length > 0 ? (
                days.map((day: Glycemia, index: number) => (
                    <View key={index}>
                        <Text>Índice Glicêmico: {day.glycemicIndex}</Text>
                        <Text>Data de Criação: {new Date(day.creationDate).toLocaleString()}</Text>
                    </View>
                ))
            ) : (
                <Text>Nenhum dado encontrado.</Text>
            )}
        </View>
    );
}
