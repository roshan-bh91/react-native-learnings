import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Press on iOS</Text>
    </Pressable>
  );
};

export default CustomButton;
