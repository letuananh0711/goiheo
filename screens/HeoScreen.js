import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from "react-native-elements";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { submitToken } from '../services/api';
import { useState } from 'react';

// Async Function for registering the push notifications
const registerForPushNotificationsAsync = async () => {
    let token;
    // Must use physical device for push notifications
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        // dont have a permission yet
        if (existingStatus !== 'granted') {
            // ask user for aprrove a permission
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        // alert in case that permission is refused and END_FUNCTION
        if (finalStatus !== 'granted') {
            alert('Failed to get a permissions for push notifications');
            return;
        }

        // the permission is granted so get the token for user
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for push notifications');
    }

    // somes settings for android devices
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
};

function HeoScreen() {

    const [token, setToken] = useState();

    return (
        <View style={styles.page}>
            <Text style={styles.heading}>{token ? `Mã số của shiheo ${token.code}`: 'Shiheo chưa có mã số!'}</Text>
            <Button
                title='Bấm để lấy mã số'
                onPress={async () => {
                    const token = await registerForPushNotificationsAsync();
                    if (token) {
                        const storedToken = await submitToken();
                        setToken(storedToken);
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 30,
        margin: 30,
    },
    heading: {
        textAlign: 'center',
        margin: 5,
        fontSize: 23,
        fontWeight: 'bold',
    },
});

export default HeoScreen;