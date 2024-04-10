import { Text, View } from "react-native";

const TextDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <Text style={{ padding: 60 }}>
        <Text style={{ color: "white" }}>Hello</Text> World
      </Text>
    </View>
  );
};

export default TextDemo;
