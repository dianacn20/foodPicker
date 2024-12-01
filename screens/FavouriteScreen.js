import MealList from "../components/MealList/MealList";
import { StyleSheet, Text, View } from "react-native"; // Am adăugat Text și View pentru utilizarea acestora în componenta de afișare a mesajului
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourite-context";

function FavouriteScreen() {
    // Obtine lista cu id-uri favorite din context
    const { ids } = useContext(FavouritesContext);

    // Filtrarea dupa id-uri
    const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

    // Daca nu exista nimic in lista de favorite afiseaza mesajul
    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    No favourite meals found. Start adding some!
                </Text>
            </View>
        );
    }
    // Returnează MealList atunci când există elemente în lista de mese favorite
    return <MealList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});

export default FavouriteScreen;
