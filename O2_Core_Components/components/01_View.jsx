import { View } from "react-native";

const ViewDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View>
    </View>
  );
};

export default ViewDemo;
