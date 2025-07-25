import {Text, View, StyleSheet, Image, Switch} from "react-native";
import React, { useState } from "react";

function Door(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/images/secure4.jpg')} style={styles.headerIcon} />
                    <Text style={styles.title}>Contrôle de la porte</Text>
                </View>
                <Text style={styles.subtitle}>Ouvrez ou fermez la porte à distance</Text>
                <Text style={styles.count}>Statut actuel : {isOpen ? 'Ouverte' : 'Fermée'}</Text>
            </View>
            <View style={styles.switchBox}>
                <Text style={styles.switchLabel}>{isOpen ? 'Porte ouverte' : 'Porte fermée'}</Text>
                <Switch
                    value={isOpen}
                    onValueChange={setIsOpen}
                    thumbColor={isOpen ? '#2ecc40' : '#e74c3c'}
                    trackColor={{ false: '#bbb', true: '#2ecc40' }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf0f6',
        paddingTop: 0,
        paddingHorizontal: 0,
    },
    headerBox: {
        width: '100%',
        backgroundColor: '#007bff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 60,
        paddingBottom: 30,
        marginBottom: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
    },
    headerIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 12,
        borderWidth: 2,
        borderColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: '#eaf0f6',
        textAlign: 'center',
    },
    count: {
        fontSize: 14,
        color: '#eaf0f6',
        marginTop: 8,
        fontStyle: 'italic',
    },
    switchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 18,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
        width: '90%',
        alignSelf: 'center',
    },
    switchLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginRight: 18,
    },
});

export default Door