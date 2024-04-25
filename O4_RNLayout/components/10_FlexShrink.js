import { StyleSheet, View } from "react-native";
import Box from "./Box";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
    width: 300,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

const UnderstandingFlexShrink = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flexShrink: 1 }}>
        Box 1 shrink
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", flexShrink: 4 }}>
        Box 2 shrink
      </Box>
    </View>
  );
};

export default UnderstandingFlexShrink;
