import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { s } from "react-native-wind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FetchToDo from './views/fetchToDo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Book" component={FetchToDo} /> 
    </Stack.Navigator>
  </NavigationContainer>


  );
}


