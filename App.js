import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HeoScreen from './screens/HeoScreen';
import BeoScreen from './screens/BeoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Shiheo"
          component={HeoScreen}
          options={{ tabBarIcon: () => <Text>👦</Text>, }}
        />
        <Tab.Screen
          name="Shibeo"
          component={BeoScreen}
          options={{ tabBarIcon: () => <Text>👧</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}