import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

const UnderstandingWindowDimensions = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  console.log({ windowWidth, windowHeight });
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "80%" : "90%",
            height: windowHeight > 600 ? "40%" : "45%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 48 : 24,
            },
          ]}
        >
          Understanding the Windows Dimensions
        </Text>
      </View>
    </View>
  );
};

export default UnderstandingWindowDimensions;
