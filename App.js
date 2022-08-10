import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HeoScreen from './screens/HeoScreen';
import BeoScreen from './screens/BeoScreen';

import * as Notifications from 'expo-notifications';

const Tab = createBottomTabNavigator();

// https://docs.expo.dev/push-notifications/overview/

// Settings for the notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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