import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Platform, Pressable, Image, Text } from "react-native";
import MealDetails from "../MealDetails";

// Componenta MealItem afișează informații despre un anumit preparat și permite navigarea către detalii
function MealItem({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) {
    const navigation = useNavigation();

    // Funcția care gestionează navigarea către detalii atunci când un preparat este selectat
    function selectMealItemHandler() {
        navigation.navigate("MealDetail", { mealId: id });
    }

    return (
        <View style={styles.mealItem}>
            {/* Utilizăm Pressable pentru a permite interacțiunea cu preparatul */}
            <Pressable
                android_ripple={{ color: "#ccc" }} // Adăugăm un efect de ripple pentru platforma Android
                style={({ pressed }) => [pressed && styles.buttonPressed]} // Stil pentru când butonul este apăsat
                onPress={selectMealItemHandler} // Acțiunea de navigare la detalii când preparatul este apăsat
            >
                <View style={styles.innerContainer}>
                    {/* Imaginea preparatului */}
                    <Image
                        style={styles.image}
                        source={{ uri: imageUrl }} // Adresa URL a imaginii
                    />
                    {/* Titlul preparatului */}
                    <Text style={styles.title}>{title}</Text>
                    {/* Detaliile despre preparat (durată, complexitate, accesibilitate) */}
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

// Stilurile componentei MealItem
const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // Ascunderea overflow-ului pe Android pentru umbrele
    },
    buttonPressed: {
        opacity: 0.5, 
    },
});

// Exportăm componenta MealItem pentru a fi utilizată în alte părți ale aplicației
export default MealItem;
