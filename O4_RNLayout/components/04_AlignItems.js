import { StyleSheet, View } from "react-native";
import Box from "./Box";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    // 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  },
});

const UnderstandingFlexAlignItems = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", paddingVertical: 100 }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
    </View>
  );
};

export default UnderstandingFlexAlignItems;
