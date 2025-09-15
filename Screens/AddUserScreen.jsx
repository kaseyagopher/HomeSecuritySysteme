import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as LocalAuthentication from 'expo-local-authentication';

const API_URL = 'http://192.168.26.108:3000/api'; // Remplacez par votre IP

const AddUserScreen = ({ navigation }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [roleUtilisateur, setRoleUtilisateur] = useState('utilisateur');

    const [idEmpreinte, setIdEmpreinte] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const generateUniqueTemplate = () => {
        return `fingerprint_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    };

    const handleBiometricScan = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        if (!hasHardware) {
            Alert.alert('Erreur', 'Ce téléphone ne possède pas de capteur d\'empreinte.');
            return;
        }

        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (!isEnrolled) {
            Alert.alert('Erreur', 'Veuillez d\'abord configurer une empreinte digitale dans les paramètres du téléphone.');
            return;
        }

        setIsProcessing(true);
        try {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Scanner votre empreinte pour l\'enregistrement',
                cancelLabel: 'Annuler',
            });

            if (result.success) {
                const template = generateUniqueTemplate();
                const fingerprintData = {
                    template,
                    dateCapture: new Date().toISOString(),
                    statut: 'actif'
                };

                const response = await fetch(`${API_URL}/empreintes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fingerprintData),
                });

                if (!response.ok) {
                    throw new Error('Erreur d\'enregistrement de l\'empreinte sur le serveur.');
                }

                const responseData = await response.json();
                setIdEmpreinte(responseData.id);
                Alert.alert('Succès', 'Empreinte scannée et enregistrée. Vous pouvez maintenant enregistrer l\'utilisateur.');
            } else {
                Alert.alert('Échec du scan', 'L\'authentification a échoué. Veuillez réessayer.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erreur', 'Une erreur est survenue lors du scan ou de l\'enregistrement.');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleAddUser = async () => {
        if (!nom || !prenom || !idEmpreinte) {
            Alert.alert('Erreur', 'Veuillez remplir le nom, prénom et enregistrer l\'empreinte.');
            return;
        }

        setIsProcessing(true);
        try {
            const userData = {
                nom,
                prenom,
                idEmpreinte,
                dateEnregistrement: new Date().toISOString(),
                roleUtilisateur,
            };

            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erreur d\'enregistrement de l\'utilisateur sur le serveur.');
            }

            Alert.alert('Succès', 'Utilisateur enregistré.');
            navigation.navigate('UserList');
        } catch (error) {
            console.error(error);
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'enregistrement de l\'utilisateur.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nom:</Text>
            <TextInput style={styles.input} placeholder="Nom" value={nom} onChangeText={setNom} />

            <Text style={styles.label}>Prénom:</Text>
            <TextInput style={styles.input} placeholder="Prénom" value={prenom} onChangeText={setPrenom} />

            <Text style={styles.label}>Rôle:</Text>
            <Picker selectedValue={roleUtilisateur} onValueChange={setRoleUtilisateur}>
                <Picker.Item label="Utilisateur" value="utilisateur" />
                <Picker.Item label="Administrateur" value="administrateur" />
                <Picker.Item label="Superviseur" value="superviseur" />
            </Picker>

            <View style={styles.buttonContainer}>
                {idEmpreinte ? (
                    <Text style={styles.successText}>✅ Empreinte scannée (ID: {idEmpreinte})</Text>
                ) : (
                    <Button
                        title="Scanner l'empreinte"
                        onPress={handleBiometricScan}
                        disabled={isProcessing}
                    />
                )}
            </View>

            <Button
                title="Enregistrer l'utilisateur"
                onPress={handleAddUser}
                disabled={isProcessing || !idEmpreinte || !nom || !prenom}
            />
            {isProcessing && <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 16, marginBottom: 5 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
    buttonContainer: { marginVertical: 10 },
    successText: { color: 'green', textAlign: 'center', marginBottom: 10, fontWeight: 'bold' },
    activityIndicator: { marginTop: 20 }
});

export default AddUserScreen;