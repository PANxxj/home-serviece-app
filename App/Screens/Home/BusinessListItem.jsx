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
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {data.name}
        </Text>
        <Text
          style={{ fontSize: 13, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {data.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "outfit",
            padding: 3,
            color: Colors.PRIMARY,
            backgroundColor: Colors.PRIMARY_LIGHT,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
          }}
        >
          {data.category.name}
        </Text>
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
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
});
