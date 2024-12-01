import { View, StyleSheet, Platform, Pressable, Text } from "react-native";

// Componenta CategoryGridTile reprezintă o celulă într-un grid care afișează o categorie
function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            {/* Utilizăm Pressable pentru a permite interacțiunea cu celula */}
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed, // Stil pentru când butonul este apăsat
                ]}
                android_ripple={{ color: "#ccc" }} // Adăugăm un efect de ripple pentru platforma Android
                onPress={onPress} // Acțiunea care are loc când celula este apăsată
            >
                {/* Container pentru conținutul celulei */}
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    {/* Textul care reprezintă titlul categoriei */}
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

// Stilurile componentei CategoryGridTile
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // Ascunderea overflow-ului pe Android pentru umbrele
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonPressed: {
        opacity: 0.5, 
    },
});

export default CategoryGridTile;
