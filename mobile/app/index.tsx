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
import { postData } from '@/service/api';
import ToastManager, { Toast } from 'toastify-react-native'

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
      console.log('data: ', date)
      await postData('/glycemias', { glycemicIndex: parseInt(glycemicIndex), creationDate: date });
      Toast.success('Salvo com sucesso', 'top')
    } catch (error) {
      Toast.error('Erro ao salvar', 'top')
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
        <ToastManager />
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
