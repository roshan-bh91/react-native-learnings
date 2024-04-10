import { Alert, Button, View } from "react-native";

const AlertDemo = () => {
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      <Button
        title={"Alert 1"}
        onPress={() => {
          Alert.alert("Alert title only shows here");
        }}
      />
      <Button
        title={"Alert 2"}
        onPress={() => {
          Alert.alert("Alert title shows here", "Along with the message");
        }}
      />
      <Button
        title={"Alert 3"}
        onPress={() => {
          Alert.alert("Alert title shows here", "Along with the message", [
            {
              text: "Button 1",
              onPress: () => {
                console.log("Button 1 has been clicked");
              },
            },
            {
              text: "Button 2",
              onPress: () => {
                console.log("Button 2 has been clicked");
              },
            },
          ]);
        }}
      />
    </View>
  );
};
export default AlertDemo;
