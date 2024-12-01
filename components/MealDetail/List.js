import { StyleSheet, Text, View } from "react-native";

// Definim un component List care primește un array de date și afișează fiecare element într-un View cu un Text
function List({ data }) {
    // Folosim metoda map pentru a crea un array de componente View pentru fiecare element din data
    return data.map((dataPoint) => (
        // Pentru fiecare element din data, creăm un View cu un key unic și un stil definit în StyleSheet
        <View key={dataPoint} style={styles.listItem}>
            {/* În interiorul View-ului, afișăm un Text cu textul din dataPoint și un stil definit în StyleSheet */}
            <Text style={styles.itemText}>{dataPoint}</Text>    
        </View>
    ));
}

// Exportăm componenta List pentru a fi utilizată în alte părți ale aplicației
export default List;

// Definim stilurile folosind StyleSheet.create pentru a le gestiona mai eficient
const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497", 
    },
    itemText: {
        color: "#351401", 
        textAlign: "center", 
    },
});
