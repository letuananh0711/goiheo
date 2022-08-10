import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, Button } from "@rneui/themed";
import { sendPushNotification, getToken } from '../services/api';
import { useState } from 'react';

function BeoScreen() {
    const [tokenInput, setTokenInput] = useState();
    const [token, setToken] = useState();

    return (
        <View style={styles.page}>
            {token ? (
                <View>
                    <Text style={styles.heading}>{`Mã số của shiheo: ${token.code}`}</Text>
                    <Text style={styles.heading}>{`Có thể triệu hồi shiheo! 😈`}</Text>
                </View>
            ):
                (<View>
                <Input
                    placeholder = 'Nhập mã số của shiheo'
                    value = { tokenInput }
                    onChangeText = { setTokenInput }
                />
            <Button
                title='Xác nhận'
                onPress={async () => {
                    const storedToken = await getToken(tokenInput);
                    setToken(storedToken);
                }}
            />
        </View>)
}
{
    token &&
        <View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#e74c3c' }]}
                    onPress={() => sendPushNotification(token.token, '🍲 Em đói bụng quá', 'Chở em đi ăn đi heo mập! 🥰')}
                >
                    <Text>🍲 Đói bụng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#2980b9' }]}
                    onPress={() => sendPushNotification(token.token, '🥤 Em thèm trà sữa', 'Em thèm Chatime quá, huhuhu 🍸')}
                >
                    <Text>🥤 Thèm tà tữa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#2ecc71' }]}
                    onPress={() => sendPushNotification(token.token, '😘 Nhớ heo', 'Nhớ heo mập quá 😭')}
                >
                    <Text>😘 Nhớ nhớ nhớ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#f1c40f' }]}
                    onPress={() => sendPushNotification(token.token, '📱 Gọi em nha', 'Rảnh gọi em nha heo 🐱')}
                >
                    <Text>📱 Call me babeeeeeee</Text>
                </TouchableOpacity>
            </View>
        </View>
}
        </View >
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 30,
        margin: 30,
    },
    heading: {
        textAlign: 'center',
        margin: 15,
        fontSize: 23,
        fontWeight: 'bold',
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        textAlign: 'center',
        margin: 5,
        height: 100,
        width: '45%',
        color: 'white',
    }
});

export default BeoScreen;