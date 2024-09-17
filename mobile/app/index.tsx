import RegisterScreen from './register';
import CalendarScreen from './calendar';
import Glycemias from './glycemias';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {

  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Glycemias" component={Glycemias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
