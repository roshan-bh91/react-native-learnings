import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const UnderstandingSafeAreaView = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UnderstandingSafeAreaView;
