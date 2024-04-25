import { StyleSheet, View } from "react-native";
import Box from "./Box";

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 6,
    marginTop: 60,
    height: 300,
    flexWrap: "wrap",
    alignContent: "space-around",
    // 'flex-start' | 'flex-end' | 'stretch' | 'center' | 'space-between' | 'space-around'
  },
});

const UnderstandingFlexAlignContent = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", width: 80, height: 60 }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", width: 80, height: 60 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", width: 80, height: 60 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ab9156", width: 80, height: 60 }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "#6b0803", width: 80, height: 60 }}>
        Box 5
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", width: 80, height: 60 }}>
        Box 6
      </Box>
      <Box style={{ backgroundColor: "#b95f21", width: 80, height: 60 }}>
        Box 7
      </Box>
    </View>
  );
};
export default UnderstandingFlexAlignContent;
