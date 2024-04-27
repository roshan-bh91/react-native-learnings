import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Press on Android</Text>
    </Pressable>
  );
};

export default CustomButton;
