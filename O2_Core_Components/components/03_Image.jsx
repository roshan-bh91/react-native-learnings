import { Image, ImageBackground, Text, View } from "react-native";
const logoImg = require("../assets/adaptive-icon.png");
const ImageDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* For locally stored assets */}

      <Image source={logoImg} style={{ height: 200, width: 200 }} />

      {/* For assets that are fetched through network, it is a must to mention size else the image won't be displayed
        And instead of passing the url directly inside the source attribute we make use of the source
      */}
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
      <ImageBackground style={{ flex: 1 }} source={logoImg}>
        <Text>Hello World</Text>
      </ImageBackground>
    </View>
  );
};
export default ImageDemo;
