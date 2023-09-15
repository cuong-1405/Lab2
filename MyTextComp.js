import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const MyTextComp = (props) => {
  return (
    <View>
      <Text
        style={StyleSheet.create({
          fontSize: 45,
          color: "#de6870",
        })}
      >
        {props.noidungText}
      </Text>
    </View>
  );
};

export default MyTextComp;
