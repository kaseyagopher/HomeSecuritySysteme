import {Text, View, StyleSheet, FlatList, Image} from "react-native";

const DATA = [
    {
        id: '1',
        user: 'Admin',
        date: '07/07/2025',
        time: '14:32',
        type: 'Entrée',
        avatar: require('../assets/images/profileIcon.jpg'),
    },
    {
        id: '2',
        user: 'Jean',
        date: '07/07/2025',
        time: '12:10',
        type: 'Sortie',
        avatar: require('../assets/images/profileIcon.jpg'),
    },
    {
        id: '3',
        user: 'Admin',
        date: '07/07/2025',
        time: '09:05',
        type: 'Entrée',
        avatar: require('../assets/images/profileIcon.jpg'),
    },
];

function History() {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.infoBox}>
                <Text style={styles.user}>{item.user}</Text>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.date}>{item.date} à {item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/images/secure3.jpg')} style={styles.headerIcon} />
                    <Text style={styles.title}>Historique des accès</Text>
                </View>
                <Text style={styles.subtitle}>Suivi des entrées et sorties par empreinte digitale</Text>
                <Text style={styles.count}>{DATA.length} accès enregistrés</Text>
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
    );
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
    avatar: {
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
    user: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    type: {
        fontSize: 14,
        color: '#2ecc40',
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

export default History;
