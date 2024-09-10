import HeaderComponent from '@/components/HeaderComponent';
import SubtitleComponent from '@/components/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent';
import { useFonts } from '@expo-google-fonts/manrope';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Manrope-Regular.otf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
