import { StyleSheet, Text, View } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.darkMode]}>
        <Text style={[styles.darkModeText]}>
          Stylesheet API
          <Text style={[styles.boldText]}> in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.iosBoxShadow]}>
        <Text
          style={{ color: "white", backgroundColor: "black", borderRadius: 5 }}
        >
          Light Blue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidBoxShadow]}>
        <Text>Light Green Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    height: "25%",
    width: "50%",
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "pink",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "dashed",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  iosBoxShadow: {
    /* shadowColor specifies the color of the shadow */
    shadowColor: "midlightblue",
    /* shadowOffset accepts an object containing width
     * and height properties with numerical values.
     * Both width and height can be positive
     * or negative
     */
    shadowOffset: {
      width: 10,
      height: 10,
    },
    /* This property accepts a number to set the blur radius
     * A larger value creates a larger and lighter blur
     * Making the shadow more prominent
     */
    shadowRadius: 4,
    /* shadowOpacity sets the transparency of the box shadow
     * Its value ranges from 0 to 1 with
     * 0 representing complete transparency
     * 1 representing complete opacity
     */
    shadowOpacity: 0.6,
  },
  androidBoxShadow: {
    shadowColor: "#333333",
    elevation: 40,
  },
  darkMode: {
    backgroundColor: "black",
    // color: "white",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default App;
