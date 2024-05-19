import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  textInput: {
    padding: 10,
    margin: 12,
    borderWidth: 2,
    height: 40,
  },
  multilineTextInput: {
    minHeight: 100,
    // So in ios, the text input is aligned to top
    // bur in android by default, the text input is aligned to center
    // so to handle the alignment part we make use of this property
    textAlignVertical: "top",
  },
});

const UnderstandingMultiLineTextInput = () => {
  return (
    <SafeAreaView>
      <Text>Understanding about multiline text input</Text>
      <TextInput
        placeholder="Multi line text input"
        multiline
        style={[styles.textInput, styles.multilineTextInput]}
      />
    </SafeAreaView>
  );
};

export default UnderstandingMultiLineTextInput;
