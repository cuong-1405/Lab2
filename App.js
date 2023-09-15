import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import MyTextComp from "./MyTextComp";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Component } from "react";

class HomePage extends Component {
  state = {
    myState: "Trạng thái 1",
  };
  updateText = () => {
    if (this.state.myState == "Trạng thái 1") {
      this.setState({ myState: "Trạng thái 2" });
    } else {
      this.setState({ myState: "Trạng thái 1" });
    }
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.heading}>Tiêu đề</Text>
          <Text style={styles.text}>Nguyễn Văn Cường</Text>
          <Text style={styles.subTitle}>{this.state.myState}</Text>

          <Button onPress={this.updateText} title="Click me!" color="#841584" />

          <MyTextComp noidungText="Code bai 3" />

          <MyTextComp noidungText="Code bai 4" />

          <View style={styles.horizontalView}>
            {/* <View style={[styles.redbox, styles.blackbox]} /> */}
            <View style={styles.redbox} />
            <View style={styles.bluebox} />
            <View style={styles.blackbox} />
          </View>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: "row",
    marginTop: 20,
  },
  container: {
    padding: 10,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "cornsilk",
    alignItems: "center",
    justifyContent: "center",
  },
  redbox: {
    flex: 1,
    height: 100,
    backgroundColor: "red",
  },
  bluebox: {
    flex: 2,
    height: 100,
    backgroundColor: "green",
  },
  blackbox: {
    flex: 1,
    height: 100,
    backgroundColor: "black",
  },
  heading: {
    color: "blueviolet",
    fontSize: 60,
  },
  text: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 30,
    color: "#dd0000",
  },
});
export default HomePage;
