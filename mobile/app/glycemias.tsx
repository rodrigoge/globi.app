import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import ItemComponent from '@/components/ItemComponent';
import SubtitleComponent from '@/components/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const renderItem = ({ item }: { item: Glycemia }) => (
        <View style={styles.card}>
            <ItemComponent
                glycemicIndex={item.glycemicIndex}
                creationDate={formatDate(item.creationDate)}
            />
        </View>
    );

    return (
        <View style={styles.modal}>
            <HeaderComponent />
            <TitleComponent children="Glicemias do Dia" />
            <SubtitleComponent children="Listagem de marcações realizadas no dia selecionado." />
            <FlatList
                data={glycemias}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.items}
                ListEmptyComponent={<Text style={styles.emptyList}>Sem dados disponíveis</Text>}
            />
            <FooterComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    items: {
        paddingBottom: 180,
    },
    card: {
        width: '92%',
        marginTop: 10,
        alignSelf: 'center',
    },
    emptyList: {
        fontSize: 24,
        width: '92%',
        marginTop: 10,
        alignSelf: 'center',
    },
});
