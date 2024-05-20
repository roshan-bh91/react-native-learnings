import { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  postCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
  },
  postTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  postBody: {
    fontSize: 24,
    fontColor: "#666666",
  },
  listEmphasis: {
    textAlign: "center",
    fontSize: 24,
  },
  headerText: {
    marginBottom: 12,
  },
  footerText: {
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const UnderstandingListWithApi = () => {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // for implementing the pull to refresh action with respect to flatlist
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (limit = 10) => {
    const responseReceived = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await responseReceived.json();
    setPostsList(data);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={
        !isLoading ? styles.safeAreaViewContainer : styles.loadingContainer
      }
    >
      {!isLoading ? (
        <View style={styles.listContainer}>
          <FlatList
            data={postsList}
            renderItem={({ item: { title, body } }) => {
              return (
                <View style={styles.postCard}>
                  <Text style={styles.postTitle}>{title}</Text>
                  <Text style={styles.postBody}>{body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 16 }} />;
            }}
            ListHeaderComponent={() => {
              return (
                <Text style={[styles.listEmphasis, styles.headerText]}>
                  Posts List
                </Text>
              );
            }}
            ListFooterComponent={() => {
              return (
                <Text style={[styles.listEmphasis, styles.footerText]}>
                  List ends here
                </Text>
              );
            }}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      ) : (
        <>
          <ActivityIndicator size={"large"} color={"#ffb591"} />
        </>
      )}
    </SafeAreaView>
  );
};
