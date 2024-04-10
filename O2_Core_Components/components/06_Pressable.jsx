import { Image, Pressable, View, Text } from "react-native";
const logoImg = require("../assets/adaptive-icon.png");
const PressableDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable
        onPress={() => {
          console.log("An image node has been pressed");
        }}
      >
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("A text node has been pressed");
        }}
        onPressIn={() => {
          console.log("A press in callback has been called");
        }}
        onPressOut={() => {
          console.log("A press out callback has been called");
        }}
        onLongPress={() => {
          console.log("A long press callback has been called");
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
          diam ut lorem molestie consequat. Nunc molestie dui varius rutrum
          efficitur. Curabitur id maximus odio. Aenean vitae erat maximus, porta
          tortor ut, auctor quam. Donec ut ligula euismod, gravida mi quis,
          ullamcorper metus. Duis mollis lectus eu mi pellentesque, eget
          tincidunt ligula aliquam. Maecenas interdum arcu ac est fermentum
          cursus. Integer pulvinar eleifend urna ac sagittis. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Cras at dictum mauris. Pellentesque eget odio blandit, egestas
          augue ac, aliquam augue. Aliquam sagittis volutpat lacus maximus
          finibus. Vestibulum placerat ante interdum risus porta, eu iaculis
          lorem sollicitudin. Aenean iaculis pellentesque nunc, in ornare velit
          pellentesque eu. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus mattis nisi eu arcu vehicula faucibus. Duis ac
          tempus lectus. Etiam lacus erat, dignissim at bibendum id, molestie et
          lectus.
        </Text>
      </Pressable>
    </View>
  );
};

export default PressableDemo;
