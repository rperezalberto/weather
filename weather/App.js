import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}
