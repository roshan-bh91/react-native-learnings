import { Text, View } from "react-native";

const GreetCard = ({ name }) => {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
};

export default GreetCard;
