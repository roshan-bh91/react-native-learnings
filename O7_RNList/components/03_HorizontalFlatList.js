import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import pokemonList from "../data.json";

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  horizontalSpacing: {
    paddingHorizontal: 16,
  },
  pokemonCard: {
    marginRight: 16,
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});



const UnderstandingHorizontalFlatList = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.horizontalSpacing}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Horizontal Flatlist Demo
          </Text>
        </View>

        <FlatList
          data={pokemonList}
          renderItem={({ item: { id, name, type } }) => {
            console.log({ id });
            return (
              <View style={styles.pokemonCard}>
                <Text style={styles.cardText}>{type}</Text>
                <Text style={styles.cardText}>{name}</Text>
              </View>
            );
          }}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default UnderstandingHorizontalFlatList;
