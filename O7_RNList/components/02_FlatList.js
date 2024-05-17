import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import pokemonList from "../data.json";

const UnderstandingListWithFlatList = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.spacingHorizontal}>
        {/** FlatList is used for rendering a list of items in React Native. But unlike the ScrollView component
         * which renders all the items even if they are not present in the viewport. For smaller lists,
         * rendering all the items won't be an issue, but can lead to performance problems
         * for lists of more than 1000 items.
         *
         * Flatlist renders only those items which are currently in view making it highly performant.
         * It also generates a few devices length of content in advance in order to ensure smooth scrolling
         */}
        <FlatList
          data={pokemonList}
          renderItem={({ item: { id, type, name } }) => {
            return (
              <View style={styles.cardContainer}>
                <Text style={styles.cardText}>{type}</Text>
                <Text style={styles.cardText}>{name}</Text>
              </View>
            );
          }}
          // keyExtractor assigns a unique value to each item in the flatlist
          // It refers first to the item.key if that doesn't exist then it refers to the item.id
          // After that it refers to the index of the item in the data provided to the flatlist
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  spacingHorizontal: {
    paddingHorizontal: 16,
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  cardContainer: {
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    borderWidth: 2,
  },

  cardText: {
    fontSize: 30,
  },
});

export default UnderstandingListWithFlatList;
