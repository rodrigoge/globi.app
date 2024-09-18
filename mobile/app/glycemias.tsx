import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

interface Glycemia {
    id: number;
    glycemicIndex: number;
    creationDate: string;
}

type RootStackParamList = {
    glycemias: { glycemias: Glycemia[] };
};

type GlycemiasRouteProp = RouteProp<RootStackParamList, 'glycemias'>;

export default function Glycemias() {
    const route = useRoute<GlycemiasRouteProp>(); 
    const glycemias = route.params?.glycemias || [];

    return (
        <View>
            {glycemias.length > 0 ? (
                glycemias.map((glycemia: Glycemia, index: number) => (
                    <View key={index}>
                        <Text>Índice Glicêmico: {glycemia.glycemicIndex}</Text>
                        <Text>Data de Criação: {new Date(glycemia.creationDate).toLocaleString()}</Text>
                    </View>
                ))
            ) : (
                <Text>Sem dados disponíveis</Text>
            )}
        </View>
    );
}
