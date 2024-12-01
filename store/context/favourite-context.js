import { createContext, useState } from "react";

// cream context pentru gestionarea starii cu lista de favorite
export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});

// Componenta care va gestiona starea cu lista de favorite
function FavouritesContextProvider({ children }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    // Adaugam un id in lista de favorite
    function addFavourite(id){
        setFavouriteMealIds((currentFavouriteMealIds) =>[
            ...currentFavouriteMealIds,
            id,
        ]);
    }
    //Stergem un id din lista de favorite
    function removeFavourite(id){
        setFavouriteMealIds((currentFavouriteMealIds) => {
            return currentFavouriteMealIds.filter((mealId) => mealId !== id);
        });
    }

    return(
        <FavouritesContext.Provider
        value={{
            ids: favouriteMealIds,
            addFavourite: addFavourite,
            removeFavourite: removeFavourite,
        }}
        >
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContextProvider;