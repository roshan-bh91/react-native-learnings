import { Button, View } from "react-native";

const ButtonDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("A button component has been pressed");
        }}
        color="midnightblue"
        disabled={false}
      />
    </View>
  );
};

export default ButtonDemo;
