import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "./CustomButton/CustomButton";

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
    padding: Platform.OS === "android" ? 40 : 0,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 30,
      },
      android: {
        fontSize: 40,
        color: "lightblue",
      },
    }),
    textAlign: "center",
    fontWeight: "bold",
  },
});

const UnderstandingPlatform = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Understanding Platform related code</Text>
          <CustomButton
            onPress={() => {
              Alert.alert(`Showing alert on ${Platform.OS}`);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UnderstandingPlatform;
