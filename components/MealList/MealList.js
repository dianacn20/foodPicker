import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "./MealItem";

function MealList({ items }) {

    // Functia care returneaza un component din FlatList
    const renderMeal = ({ item }) => {
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };
    
        return <MealItem {...mealItemProps} />;
    };
    return (
        <View>
            <FlatList
                data = { items }
                keyExtractor = { (item) => item.id }
                renderItem = { renderMeal }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
    },
});

export default MealList;