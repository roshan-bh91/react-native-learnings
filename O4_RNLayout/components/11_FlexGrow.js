import { StyleSheet, View } from "react-native";
import Box from "./Box";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    borderColor: "red",
    borderWidth: 6,
    flex: 1,
  },
});

const UnderstandingFlexGrow = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803", flexGrow: 1 }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56", flexGrow: 3 }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
};

export default UnderstandingFlexGrow;
