import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavouritesContextProvider from './store/context/favourite-context';
import MealDetailScreen from './screens/MealDetailScreen';

// Crearea navigatorilor
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Definirea navigatorului de tip Drawer
function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#351401", // culoarea de fundal a antetului
                },
                headerTintColor: "white", // culoarea textului din antet
                sceneContainerStyle: {
                    backgroundColor: "#351401", // culoarea de fundal a scenei
                },
                drawerContentStyle: { backgroundColor: "#351401" }, // culoarea de fundal a meniului lateral
                drawerActiveTintColor: "#e4baa1", // culoarea textului pentru elementele active din meniul lateral
                drawerInactiveTintColor: "white", // culoarea textului pentru elementele inactive din meniul lateral
            }}
            >
            {/* Definirea ecranului pentru categorii */}
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories", // titlul ecranului
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} /> // iconița pentru meniul lateral
                    ),
                }}
                />
            {/* Definirea ecranului pentru favorite */}
            <Drawer.Screen
                name="Favourites"
                component={FavouriteScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" size={size} color={color} /> // iconița pentru meniul lateral
                    ),
                }}
                />
        </Drawer.Navigator>
    );
}

// Componenta principală a aplicației
export default function App() {
    return (
        <>
            <StatusBar style="light" />
            {/* Provider pentru contextul de favorite */}
            <FavouritesContextProvider>
                {/* Container pentru navigație */}
                <NavigationContainer>
                    {/* Navigatorul principal */}
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#351401", // culoarea de fundal a antetului
                            },
                            headerTintColor: "white", // culoarea textului din antet
                            contentStyle: {
                                backgroundColor: "#351401", // culoarea de fundal a conținutului
                            },
                        }}
                        >
                        {/* Ecranul principal, care conține meniul lateral */}
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                            />
                        {/* Ecranul de prezentare a tuturor meselor */}
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                            options={({ route}) => {
                                const categoryId = route.params.categoryId; // extragerea id-ului categoriei
                                return { title: categoryId }; // setarea titlului dinamic în funcție de categoria selectată
                            }}
                        />
                        {/* Ecranul de detaliu al unei mese */}
                        <Stack.Screen
                            name="MealDetail"
                            component={MealDetailScreen}
                            options={{ title: "About the Meal" }} // titlul ecranului de detaliu al mesei
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavouritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({}); 
