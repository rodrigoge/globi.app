import HeaderComponent from '@/components/HeaderComponent';
import SubtitleComponent from '@/components/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent';
import { useFonts } from '@expo-google-fonts/manrope';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import FooterComponent from '@/components/FooterComponent';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from '@/colors';
import { getData } from '@/service/api';
import { Toast } from 'toastify-react-native';

export default function CalendarScreen() {

    LocaleConfig.locales['pt-br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    };
    LocaleConfig.defaultLocale = 'pt-br';

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/Manrope-Regular.otf')
    });

    const handleGetData = async (day: any) => {
        try {
            var registers = await getData('/glycemias?date=' + day);
        } catch (error) {
            Toast.error('Erro ao buscar', 'top')
        }
    };

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    return (
        <View style={styles.modal}>
            <HeaderComponent />
            <View>
                <TitleComponent children="Histório de Marcações" />
                <SubtitleComponent children="Selecione o dia em que deseja verificar as marcações glicêmicas." />
                <Calendar
                    style={
                        styles.calendar
                    }
                    theme={{
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: colors.red,
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: colors.red,
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: colors.red,
                        selectedDotColor: '#ffffff',
                        arrowColor: colors.red,
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: 'black',
                        indicatorColor: colors.red,
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    onDayPress={(day: any) => handleGetData(day.dateString + 'T00:00:00Z')}
                />
            </View>
            <FooterComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        height: '100%',
    },
    calendar: {
        marginTop: 32
    }
});
