import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import pokemonList from "../data.json";
const UnderstandingListWithScrollView = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView style={styles.paddingHorizontal}>
        {pokemonList.map(({ id, type, name }) => {
          return (
            <View style={styles.pokemonCard} key={id}>
              <Text style={styles.cardText}>{type}</Text>
              <Text style={styles.cardText}>{name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  pokemonCard: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  cardText: {
    fontSize: 30,
  },
});

export default UnderstandingListWithScrollView;
