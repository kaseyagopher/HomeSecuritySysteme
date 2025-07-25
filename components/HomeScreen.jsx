import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.title}>SecureHome</Text>
                <Text style={styles.subtitle}>
                    Sécurisez votre domicile avec la technologie biométrique
                </Text>
            </View>

            <View style={styles.statusContainer}>
                <Image source={require('../assets/images/secure2.jpg')} style={styles.statusImage} />
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabel}>État de la porte :</Text>
                    <Text style={styles.statusValue}>Fermée</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Dernier accès :</Text>
                <Text style={styles.infoValue}>07/07/2025 à 14:32 par Admin</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Nombre d'accès aujourd'hui :</Text>
                <Text style={styles.infoValue}>5</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf0f6',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#eaf0f6',
        textAlign: 'center',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    statusImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 18,
    },
    statusTextContainer: {
        flexDirection: 'column',
    },
    statusLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    statusValue: {
        fontSize: 18,
        color: '#2ecc40',
        marginTop: 4,
    },
    infoContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    infoTitle: {
        fontSize: 15,
        color: '#555',
    },
    infoValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 2,
    },
});
