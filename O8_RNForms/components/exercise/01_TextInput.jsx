import { useState } from "react";
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
    height: 40,
    borderWidth: 1,
  },
  textValue: {
    margin: 16,
  },
});

const UnderstandingTextInputComponent = () => {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text>Understanding Text Input Component</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder={"For e.g: Kiran"}
        // this prop changes the input value to masked characters just like input type=password on the web
        secureTextEntry={false}
        // this prop ensures the type of keyboard to be shown when the input is focussed upon
        keyboardType='numeric' 
        // So on iOS after entering an input and pressing enter, the text gets capitalised or autocorrected, so to handle
        // that behavior, these 2 attributes can be made use of
        autoCorrect={false}
        // default value of this prop is sentences indicating that first letter of sentence after pressing enter will get capitalised
        // if set to this value
        autoCapitalize="none"

      />
      <Text style={styles.textValue}>My name is: {name}</Text>
    </SafeAreaView>
  );
};

export default UnderstandingTextInputComponent;
