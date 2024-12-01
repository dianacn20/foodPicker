import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {

    //Randeaza fiecare item din lista de categorii
    function renderCategoryItem({ item }) {

        // Navigheaza catre ecranul de prezentare a unei categorii
        const handlePress = () => {
            navigation.navigate("MealsOverview", { categoryId: item.id });
        };

        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={handlePress}
            />
        );
    }
    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={({id}) => id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
