import HeaderComponent from '@/components/HeaderComponent';
import InputNumberComponent from '@/components/InputNumberComponent';
import InputMaskedComponent from '@/components/InputMaskedComponent';
import SubtitleComponent from '@/components/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent';
import { useFonts } from '@expo-google-fonts/manrope';
import { SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from '@/components/ButtonComponent';
import FooterComponent from '@/components/FooterComponent';
import { getData, postData } from '@/service/api';

export default function HomeScreen() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Manrope-Regular.otf')
  });

  const [glycemicIndex, setGlycemicIndex] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const handleSendData = async () => {
    try {
      console.log("Enviando dados...");
      const result = await postData('/glycemias', { glycemicIndex: parseInt(glycemicIndex), data: date });
      console.log('Resposta do POST:', result);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };


  return (
    <View style={styles.modal}>
      <HeaderComponent />
      <View>
        <TitleComponent children="Cadastro Glicêmico" />
        <SubtitleComponent children="Por favor, preencha o índice glicêmico e a data de registro." />
        <InputNumberComponent
          children="Índice Glicêmico"
          value={glycemicIndex}
          onChange={setGlycemicIndex}
        />
        <InputMaskedComponent
          children="Data"
          value={date}
          onChange={setDate}
        />
        <ButtonComponent children="Cadastrar" onPress={() => handleSendData()} />
      </View>
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '100%'
  }
})
