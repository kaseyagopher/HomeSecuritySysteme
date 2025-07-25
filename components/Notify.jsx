import {Text, View, StyleSheet, Image, FlatList} from "react-native";
import React from "react";

const DATA = [
    {
        id: '1',
        type: 'Alerte',
        message: 'Tentative d’accès non autorisée',
        date: '07/07/2025',
        time: '13:45',
        icon: require('../assets/images/secure5.jpg'),
    },
    {
        id: '2',
        type: 'Info',
        message: 'Porte ouverte avec succès',
        date: '07/07/2025',
        time: '10:12',
        icon: require('../assets/images/secure2.jpg'),
    },
    {
        id: '3',
        type: 'Alerte',
        message: 'Empreinte inconnue détectée',
        date: '06/07/2025',
        time: '18:22',
        icon: require('../assets/images/secure3.jpg'),
    },
];

function Notify(){
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.infoBox}>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.date}>{item.date} à {item.time}</Text>
            </View>
        </View>
    );

    return(
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/images/secure5.jpg')} style={styles.headerIcon} />
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <Text style={styles.subtitle}>Alertes et informations de sécurité</Text>
                <Text style={styles.count}>{DATA.length} notifications</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 30 }}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={30}
            />
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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
        borderWidth: 1,
        borderColor: '#007bff',
    },
    infoBox: {
        flex: 1,
    },
    type: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e67e22',
    },
    message: {
        fontSize: 15,
        color: '#333',
        marginTop: 2,
    },
    date: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
    separator: {
        height: 8,
        backgroundColor: 'transparent',
    },
});

export default Notify