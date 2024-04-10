import { useState } from "react";
import { Button, StatusBar, View } from "react-native";
const StatusBarDemo = () => {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);
  return (
    <View style={{ backgroundColor: "plum", padding: 60, flex: 1 }}>
      <Button
        title={isStatusBarVisible ? "Hide" : "Show"}
        onPress={() => setIsStatusBarVisible((prev) => !prev)}
      />
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle={"light-content"}
        hidden={!isStatusBarVisible}
      />
    </View>
  );
};

export default StatusBarDemo;
