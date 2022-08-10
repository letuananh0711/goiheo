import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, Button } from "@rneui/themed";

function BeoScreen() {
    return (
        <View style={styles.page}>
            <View>
                <Input placeholder='Nhap ma so cua Shiheo' />
                <Button title='Xac nhan ma so' />
            </View>
            <Text style={styles.heading}>Trieu hoi Shiheo</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#e74c3c'}]}>
                    <Text>🍲 Em doi qua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#2980b9'}]}>
                    <Text>🥤 Them tra sua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#2ecc71'}]}>
                    <Text>😘 Nho anh qua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#f1c40f'}]}>
                    <Text>📱 Goi em nha</Text>
                </TouchableOpacity>
            </View>
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
        margin: 15,
        fontSize: 25,
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