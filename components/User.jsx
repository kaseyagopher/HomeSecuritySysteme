import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const User = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Remplacez 'localhost' par votre adresse IP de développement si vous testez sur un appareil physique ou sur un émulateur Android.
    // Exemple: const API_URL = 'http://192.168.1.10:3000/api/users';
    // Sur iOS, 'localhost' ou '127.0.0.1' fonctionne.
    const API_URL = 'http://192.168.26.108:3000/api/users/users';

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs:", error);
            Alert.alert("Erreur", "Impossible de charger les utilisateurs. Vérifiez votre connexion.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Chargement des utilisateurs...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Button
                title="Ajouter un utilisateur"
                onPress={() => navigation.navigate('AddUserScreen')}
            />

            {users.length > 0 ? (
                <FlatList
                    data={users}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.nom} {item.prenom}</Text>
                            <Text>Rôle: {item.roleUtilisateur}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noUserText}>Aucun utilisateur trouvé.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    noUserText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});

export default User;