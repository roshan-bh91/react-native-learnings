import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const getRandomItem = (arr) => {
  console.log(arr);
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item.toString();
};

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  postCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
  },
  postTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  postBody: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },

  postFormContainer: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  postInput: {
    height: 40,
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
    borderColor: "gray",
    borderWidth: 1,
  },
});

const UnderstandingPostApiWithList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postsList, setPostsList] = useState([]);
  const [errors, setErrors] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // for adding a new post
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchPosts = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?_limit=${limit}`
      );
      const postsListFromAPI = await response.json();
      setPostsList(postsListFromAPI);
      setIsLoading(false);
    } catch (error) {
      console.error("Error occured while fetching posts", error);
      setErrors("Failed to fetch the posts");
      setIsLoading(false);
    }
  };

  const addNewPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
        {
          method: "POST",
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const postDetails = await response.json();
      setPostsList([{ ...postDetails }, ...postsList]);
      setPostTitle("");
      setPostBody("");
      setErrors("");
    } catch (error) {
      console.error("An error occured while adding post", error);
      setErrors("Adding post failed");
    }
    setIsPosting(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts(20);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView
      style={isLoading ? styles.loadingContainer : styles.safeAreaViewContainer}
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#ffb591"} />
      ) : (
        <>
          {errors ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errors}</Text>
            </View>
          ) : (
            <View style={styles.listContainer}>
              <View style={styles.postFormContainer}>
                <Text>Title</Text>
                <TextInput
                  style={styles.postInput}
                  value={postTitle}
                  onChangeText={setPostTitle}
                />
                <Text>Body</Text>
                <TextInput
                  style={styles.postInput}
                  value={postBody}
                  onChangeText={setPostBody}
                />
                <Button
                  title={isPosting ? "Adding..." : "Add post"}
                  disabled={isPosting}
                  onPress={addNewPost}
                />
              </View>
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
                refreshing={refreshing}
                onRefresh={handleRefresh}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                ListHeaderComponent={() => (
                  <Text style={styles.headerText}>Post List</Text>
                )}
                ListFooterComponent={() => (
                  <Text style={styles.footerText}>List Ends</Text>
                )}
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export { UnderstandingPostApiWithList };
