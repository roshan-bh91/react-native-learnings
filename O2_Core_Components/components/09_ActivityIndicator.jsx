import { ActivityIndicator, View } from "react-native";

const ActivityIndicatorDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
      <ActivityIndicator />

      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="red" />

      <ActivityIndicator size="large" color="yellow" animating={true} />
      <ActivityIndicator size="large" color="lightgreen" animating={false} />
    </View>
  );
};

export default ActivityIndicatorDemo;
