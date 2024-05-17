import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import groupedPokemonData from "../groupedData.json";

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
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 20,
  },
  sectionHeader: {
    fontWeight: "700",
    fontSize: 28,
    backgroundColor: "#fafafa",
  },
});

const UnderstandingSectionList = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.horizontalSpacing}>
        <SectionList
          // sections prop refers to the data of the groups to be rendered in the list.
          // For each group present in the data, the items list must be present in a 'data' key in order for it to work out
          sections={groupedPokemonData}
          renderItem={({ item }) => {
            return (
              <View style={styles.pokemonCard}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          // each section details must be accessed through an object inside which the key is named as section
          renderSectionHeader={({ section }) => {
            return <Text style={styles.sectionHeader}>{section.type}</Text>;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 16 }} />;
          }}
          SectionSeparatorComponent={() => {
            return <View style={{ height: 16 }} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default UnderstandingSectionList;
