import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ navigation, route }) {
    // Obtine id-ul categoriei din parametrii rutei
    const categoryId = route.params.categoryId;

    // Filtrare pentru a afisa doar mancarurile din categoria respectiva
    const displayedMeals = MEALS.filter((mealItem) => 
        mealItem.categoryIds.includes(categoryId)
    );
    // Setare titlu ecran
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === categoryId
        ).title;

        navigation.setOptions({ title: categoryTitle });
    }, [categoryId, navigation]);

    return (
        <>
            <MealList items={displayedMeals} />
        </>
    );
}

export default MealsOverviewScreen;