import React from 'react';
import { HomeScreen } from './src/components/pages/HomeScreen';
import { FormScreen } from './src/components/pages/FormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {userId: string} | undefined ;
  FormScreen: {
    entity: "group" | "task" | "alarm"
    event: "create" | "update"
    values: FormValues 
  }
}

 
export type RootStackProps = NativeStackNavigationProp<RootStackParamList>

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => <></>}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
