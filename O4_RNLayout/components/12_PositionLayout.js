import { StyleSheet, View } from "react-native";
import Box from "./Box";

const styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 6, borderColor: "red", marginTop: 60 },
});

const UnderstandingPositionLayout = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", width: 100, height: 100 }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", width: 100, height: 100 }}>
        Box 2
      </Box>
      <Box
        style={{
          backgroundColor: "#1c4c56",
          width: 100,
          height: 100,
          position: "relative",
          left: 100,
        }}
      >
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ab9156", width: 100, height: 100 }}>
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "#6b0803",
          width: 100,
          height: 100,
          position: "absolute",
          top: 10,
          left: 50,
        }}
      >
        Box 5
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", width: 100, height: 100 }}>
        Box 6
      </Box>
      <Box style={{ backgroundColor: "#b95f21", width: 100, height: 100 }}>
        Box 7
      </Box>
    </View>
  );
};

export default UnderstandingPositionLayout;
