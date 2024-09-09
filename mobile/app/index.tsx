import HeaderComponent from '@/components/HeaderComponent';
import SubtitleComponent from '@/components/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <HeaderComponent />
      <View>
        <TitleComponent children="Cadastro Glicêmico" />
        <SubtitleComponent children="Por favor, preencha o índice glicêmico e a data de registro." />
      </View>
    </View>
  );
}
