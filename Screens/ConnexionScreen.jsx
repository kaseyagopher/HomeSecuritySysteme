import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../components/HomeScreen";
// import LinearGradient from "react-native-linear-gradient";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ConnexionScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePressSignup = () => {
        navigation.navigate('Signup');
    };
    const handlePressHome =()=>{
        navigation.navigate('MainApp')
    };

    return (
        <View style={styles.container1}>
            {/*<LinearGradient colors={['#4c669d', '#3b5998', '#192f6a']}>*/}
                <View style={styles.container2}>
                    <Text style={styles.title}>Connexion</Text>
                    <View style={styles.profileContainer}>
                        <Image style={styles.img} source={require('../assets/images/profileIcon.jpg')} />
                        <TouchableOpacity style={styles.cameraIcon}>
                            <Icon name="camera" size={24} color="#007BFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Entrez votre email ou nom d'utilisateur"
                        />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Entrez votre mot de passe"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Icon
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    size={24}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={handlePressHome}>
                            <Text style={styles.buttonText}>Se connecter</Text>
                        </TouchableOpacity>
                        <View style={styles.inlineContainer}>
                            <Text>Avez-vous un compte?</Text>
                            <TouchableOpacity onPress={handlePressSignup}>
                                <Text style={styles.createButton}>Créer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            {/*</LinearGradient>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'rgb(61,162,245)',
        width: WIDTH,
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    container2: {
        backgroundColor:'#efefef',
        alignItems: "center",
        justifyContent: "center",
        width: WIDTH,
        paddingVertical: 100,
        borderBottomRightRadius: 190,
        borderTopLeftRadius: 190,
    },
    profileContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 5,
        elevation: 5,
    },
    img: {
        height: 120,
        width: 120,
        borderRadius: 75,
    },
    input_container: {
        marginVertical: 20,
        width: WIDTH - 65,
    },
    input: {
        marginVertical: 10,
        backgroundColor: 'rgb(217,225,227)',
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
    },
    passwordContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        // top: 10,
    },
    button: {
        backgroundColor: 'rgb(61,162,245)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
    },
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    createButton: {
        color: 'rgb(61,162,245)',
        marginLeft: 10
    },
    title: {
        fontSize: 35,
        marginBottom: 15
    }
});

export default ConnexionScreen;
