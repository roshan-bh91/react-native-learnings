import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  switchComponentContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchComponentText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const UnderstandingSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text>Understanding Switch component</Text>
      <View style={styles.switchComponentContainer}>
        <Text style={styles.switchComponentText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => {
            setIsDarkMode((prev) => !prev);
          }}
          // This prop takes an object that takes care of the colors inside the track during the 2 states of the switch component
          trackColor={{ false: "", true: "#333333" }}
          //   This prop is responsible for the color of the circular component acting as the toggle
          thumbColor={"#fbf591"}
        />
      </View>
    </SafeAreaView>
  );
};

export default UnderstandingSwitch;
