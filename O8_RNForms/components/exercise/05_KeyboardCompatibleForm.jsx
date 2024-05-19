import { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  inputField: {
    height: 40,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  imageStyles: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
const KeyboardCompatibleLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted", { formData: { username, password } });
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  //   We make use of the KeyboardAvoidingView component to handle those cases where the keyboard overlay blocks the view of some parts of the components
  // It provides props like keyboardVerticalOffset as well as behavior that helps in taking care of unblocking the view of the main screen
  return (
    <KeyboardAvoidingView
      style={styles.safeAreaViewContainer}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.formContainer}>
        <Image
          source={require("../../assets/images/adaptive-icon.png")}
          style={styles.imageStyles}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputField}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default KeyboardCompatibleLoginForm;
