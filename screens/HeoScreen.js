import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from "@rneui/themed";

function HeoScreen(){
    return (
        <View style={styles.page}>
            <Text style={styles.heading}>Ban chua co ma so, bam vao de lay ma</Text>
            <Button title='Bam de lay ma so' />
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
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default HeoScreen;