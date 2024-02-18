import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const BusinessListItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Slider2.png")}
        style={styles.image}
      />
      <View>
        <Text>{data.name}</Text>
      </View>
    </View>
  );
};

export default BusinessListItem;

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
});
