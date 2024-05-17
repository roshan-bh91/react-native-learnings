import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  horizontalSpacing: {
    paddingHorizontal: 16,
  },
  cardText: {
    fontSize: 30,
  },
  pokemonCard: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  listHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  listFooter: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
});

const PractisingFlatList = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.horizontalSpacing}>
        <FlatList
          //   data={pokemonList}
          data={[]}
          renderItem={({ item: { id, type, name } }) => {
            return (
              <View style={styles.pokemonCard}>
                <Text style={styles.cardText}>{type}</Text>
                <Text style={styles.cardText}>{name}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 16 }} />;
          }}
          ListHeaderComponent={() => {
            return <Text style={styles.listHeader}>Pokemon List</Text>;
          }}
          ListFooterComponent={() => {
            return <Text style={styles.listFooter}>List ends here</Text>;
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text>List is Empty</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PractisingFlatList;
