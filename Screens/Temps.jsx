// // import React from "react"
// // import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
// // import {Dimensions} from "react-native";
// // import Icon from 'react-native-vector-icons/Ionicons';
// //
// // const WIDTH = Dimensions.get('window').width
// // const HEIGHT = Dimensions.get('window').height
// // const ConnexionScreen = ({navigation}) =>{
// //
// //     const handlePress = () =>{
// //         navigation.navigate('Signup')
// //     }
// //
// //
// //     return(
// //         <View style={styles.container1}>
// //             <View style={styles.container2}>
// //                 <Text style={styles.title}>Connexion</Text>
// //                 <View style={styles.profileContainer}>
// //                     <Image style={styles.img} source={require('../assets/images/profileIcon.jpg')}/>
// //                     <TouchableOpacity style={styles.editIcon}>
// //                         <Icon name="camera" size={24} color="#007BFF" />
// //                     </TouchableOpacity>
// //                 </View>
// //                 <View style={styles.input_container}>
// //                     <TextInput style={styles.input} placeholder="Entrez votre email ou nom d'utilisateur" ></TextInput>
// //                     <TextInput style={styles.input} placeholder="Entrez votre mot de passe" secureTextEntry={true} ></TextInput>
// //                 </View>
// //                 <View>
// //                     <TouchableOpacity style={styles.button} >
// //                         <Text style={styles.buttonText}>Se connecter</Text>
// //                     </TouchableOpacity>
// //                     <View style={styles.inlineContainer}>
// //                         <Text>Avez-vous un compte?</Text>
// //                         <TouchableOpacity onPress={handlePress}>
// //                             <Text style={styles.createButton}>Créer</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 </View>
// //             </View>
// //         </View>
// //     )
// // }
// //
// // const styles = StyleSheet.create({
// //     container1:{
// //         backgroundColor:'#83b4f3',
// //         width:WIDTH ,
// //         height:'100%',
// //         alignItems:"center",
// //         justifyContent:"center"
// //     },
// //     container2:{
// //         backgroundColor:'#fdfdfd',
// //         alignItems:"center",
// //         justifyContent:"center",
// //         width:WIDTH ,
// //         paddingVertical:100,
// //         borderBottomRightRadius:190,
// //         borderTopLeftRadius:190,
// //         borderStartEndRadius:100
// //     },
// //     profileContainer: {
// //         position: 'relative',
// //         marginBottom: 20,
// //     },
// //     editIcon: {
// //         position: 'absolute',
// //         bottom: 0,
// //         right: -10,
// //         backgroundColor: '#fff',
// //         borderRadius: 15,
// //         padding: 5,
// //         elevation: 5,
// //     },
// //     img:{
// //         height:120,
// //         width:120,
// //         borderRadius:75,
// //     },
// //     input_container:{
// //         marginVertical:20,
// //         width:WIDTH-65,
// //
// //     },
// //     input:{
// //         marginVertical:10,
// //         backgroundColor:'rgb(217,225,227)',
// //         height:40,
// //         borderRadius:50,
// //         textAlign:'center',
// //         color:'black',
// //         fontSize:16
// //     },
// //     button: {
// //         backgroundColor:'rgb(61,162,245)',
// //         paddingVertical: 10,
// //         paddingHorizontal: 20,
// //         borderRadius: 20,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// //     buttonText: {
// //         color: '#fff',
// //         fontSize: 17,
// //         textAlign: 'center',
// //
// //     },
// //     inlineContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         marginTop:10
// //     },
// //     createButton:{
// //         color:'rgb(61,162,245)',
// //         marginLeft:10
// //     },
// //     title:{
// //         fontSize:35,
// //         marginBottom:15
// //     }
// // })
// // export default ConnexionScreen
//
//
// import React, { useState } from "react";
// import { View, Text,StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
//
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
//
// const ConnexionScreen = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//
//     return (
//         <View style={styles.container1}>
//             <View>
//                 <ImageBackground  source={require('../assets/images/secure2.jpg')}
//                                   style={styles.backgroundImage}>
//                     <Text style={styles.title}>Créer un compte</Text>
//                     <View style={styles.profileContainer}>
//                         <Image style={styles.img} source={require('../assets/images/profileIcon.jpg')} />
//                         <TouchableOpacity style={styles.cameraIcon}>
//                             <Icon name="camera" size={24} color="#007BFF" />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.input_container}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Entrez votre nom d'utilisateur"
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Entrez votre adresse mail"
//                         />
//                         <View style={styles.passwordContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Entrez votre mot de passe"
//                                 secureTextEntry={!showPassword}
//                             />
//                             <TouchableOpacity
//                                 style={styles.eyeIcon}
//                                 onPress={() => setShowPassword(!showPassword)}
//                             >
//                                 <Icon
//                                     name={showPassword ? 'eye-off' : 'eye'}
//                                     size={24}
//                                     color="gray"
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                         <View style={styles.passwordContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Confirmer votre mot de passe"
//                                 secureTextEntry={!showConfirmPassword}
//                             />
//                             <TouchableOpacity
//                                 style={styles.eyeIcon}
//                                 onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                             >
//                                 <Icon
//                                     name={showConfirmPassword ? 'eye-off' : 'eye'}
//                                     size={24}
//                                     color="gray"
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.buttonText}>Créer</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ImageBackground>
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container1: {
//         width: WIDTH,
//         height:'100%',
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     backgroundImage: {
//         alignItems: "center",
//         justifyContent: "center",
//         width: WIDTH,
//         paddingVertical: 70,
//
//     },
//     profileContainer: {
//         position: 'relative',
//         marginBottom: 20,
//     },
//     cameraIcon: {
//         position: 'absolute',
//         bottom: 0,
//         right: -10,
//         backgroundColor: '#fff',
//         borderRadius: 15,
//         padding: 5,
//         elevation: 5,
//     },
//     img: {
//         height: 120,
//         width: 120,
//         borderRadius: 75,
//     },
//     input_container: {
//         marginVertical: 20,
//         width: WIDTH - 90,
//     },
//     input: {
//         marginVertical: 10,
//         backgroundColor: 'rgb(217,225,227)',
//         height: 40,
//         borderRadius: 50,
//         textAlign: 'center',
//         color: 'black',
//         fontSize: 16,
//         paddingRight: 40,
//     },
//     passwordContainer: {
//         position: 'relative',
//         justifyContent: 'center',
//     },
//     eyeIcon: {
//         position: 'absolute',
//         right: 15,
//     },
//     button: {
//         backgroundColor: 'rgb(61,162,245)',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 17,
//         textAlign: 'center',
//     },
//     inlineContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 10
//     },
//     createButton: {
//         color: 'rgb(61,162,245)',
//         marginLeft: 10
//     },
//     title: {
//         fontSize: 35,
//         marginBottom: 15
//     },
// });
//
// export default ConnexionScreen;
