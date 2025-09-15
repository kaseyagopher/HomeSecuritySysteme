import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../components/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Alarm from "../components/Alarm";
import Door from "../components/Door";
import History from "../components/History";
import Notify from "../components/Notify";
import LedControl from "./LedControl";
import User from "../components/User";

const Tab = createBottomTabNavigator();

function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline'; // Icône pour l'onglet Home
                    }else if(route.name === 'Historique') {
                        iconName = focused ? 'time' : 'time-outline'; // Icône pour "Historique"
                    } else if (route.name === 'Notification') {
                        iconName = focused ? 'notifications' : 'notifications-outline'; // Icône pour "Notification"
                    } else if (route.name === 'Porte') {
                        iconName = focused ? 'lock-open' : 'lock-open-outline'; // Icône pour "Porte"
                    } else if (route.name === 'Alarme') {
                        iconName = focused ? 'alert-circle' : 'alert-circle-outline'; // Icône pour "Alarme d'alerte"
                    }else if(route.name === 'Utilisateur') {
                        iconName = focused ? 'user' : 'user-outline';
                    }

                    return <Ionicons name={iconName} size={25} color={'rgb(61,162,245)'} />;
                },
                tabBarActiveTintColor: '',
                tabBarInactiveTintColor: '',
                tabBarStyle:{
                    height:73, padding:20                },
                tabBarLabelStyle:{
                    fontSize:10, paddingBottom:10
                }
            })}
        >
            <Tab.Screen name="Accueil" component={HomeScreen} options={{ headerShown: false }} initialRouteName={'Home'}/>
            <Tab.Screen name="Notification" component={Notify} options={{ headerShown: false }}/>
            <Tab.Screen name="Utilisateur" component={User} options={{ headerShown: false }}/>
            <Tab.Screen name="Porte" component={Door} options={{ headerShown: false }}/>
            <Tab.Screen name="Alarme" component={LedControl} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}
export default MainApp;
