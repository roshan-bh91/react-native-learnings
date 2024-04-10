import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title={isModalVisible ? "Hide Modal" : "Show Modal"}
        onPress={() => {
          setIsModalVisible(true);
        }}
        color="midnightblue"
      />
      <Modal
        /**  visible prop takes care of whether the modal is visible or not */
        visible={isModalVisible}
        /**
         * Recommended to add this prop as well when defining a modal in RN
         * onRequestClose prop takes a callback which gets trigerred when:
         * when the user presses the back button on Android
         * or dismisses the modal through a gesture on iOS
         */
        onRequestClose={() => setIsModalVisible(false)}
        /**
         * Transitions that appear when modal gets visible/invisible
         * By default it is set to none
         * Can be seen on both iOS & android environments
         * Has some more values like: 'fade' | 'slide'
         */
        animationType="slide"
        /**
         * presentationStyle prop is only for iOS devices,
         * changes in the value of this prop would be visible there only
         * By default it is set to 'fullScreen'
         * Some of its values: 'pageSheet' | 'formSheet' | 'fullScreen'
         * formSheet is narrow while pageSheet is wider, can actually view the differences by running on an iPAD simulator
         * */
        presentationStyle="pageSheet"
      >
        <View style={{ backgroundColor: "lightgreen", flex: 1, padding: 60 }}>
          <Text>Inside the modal</Text>
          <Button
            color="red"
            title="Hide modal"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalDemo;
