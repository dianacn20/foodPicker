import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { FavouritesContext } from "../store/context/favourite-context";

function MealDetailScreen({ route, navigation }) {

    // Obtine din context lista de ud-uri,
    // si functiile addFavourite si removeFavourile
    const { ids, addFavourite, removeFavourite } = 
        useContext(FavouritesContext);

    //Obtine id curent din parametrii rutei
    const mealId = route.params.mealId;

    //Verifica daca id-ul cureent este in lista de id-uri favorite
    const mealIsFavourite = ids.includes(mealId);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    // Functie care adauga sau sterge id-ul curent din lista de id-uri favorite
    function changeFavouriteStatus() {
        if (mealIsFavourite) {
            removeFavourite(mealId);
        } else {
            addFavourite(mealId);
        }
    }

    // Seteaza butonul de favorite in header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? "star" : "star-outline"}
                        color="white"
                        onPress={changeFavouriteStatus}
                    />
                );
            },
        });
    }, [navigation, changeFavouriteStatus] );

    return (
        <ScrollView style={styles.root}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 24,
    },
    listContainer: { width: "80%", alignSelf: "center" },
});
export default MealDetailScreen;
