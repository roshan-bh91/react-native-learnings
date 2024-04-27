import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const UnderstandingDimensions = () => {
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
  const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");

  //   console.log({ windowHeight, windowWidth, screenHeight, screenWidth });

  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => {
      subscription?.remove();
    };
  });

  const { width: updatedWindowWidth, height: updatedWindowHeight } =
    dimensions.window;
  console.log({ updatedWindowWidth, updatedWindowHeight });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: updatedWindowWidth > 500 ? "70%" : "90%",
            height: updatedWindowHeight > 600 ? "35%" : "45%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: updatedWindowWidth > 500 ? 50 : 24,
            },
          ]}
        >
          Understanding Dimensions API
        </Text>
      </View>
    </View>
  );
};

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

export default UnderstandingDimensions;
