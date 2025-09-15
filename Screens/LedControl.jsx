import React from 'react';
import {Text, View} from "react-native";

export default function LedControl() {
    const ip = '192.168.94.47'; // Mets ici l'IP de ton ESP32

    const allumerLed = () => {
        fetch(`http://${ip}/ledon`)
            .then(res => res.text())
            .then(console.log)
            .catch(console.error);
    };

    const eteindreLed = () => {
        fetch(`http://${ip}/ledoff`)
            .then(res => res.text())
            .then(console.log)
            .catch(console.error);
    };

    return (
        <View style={{top:"50"}}>
            <Text style={{bottom:"50"}} onPress={allumerLed}>Allumer LED</Text>
            <Text onPress={eteindreLed}>Éteindre LED</Text>
        </View>
    );
}
