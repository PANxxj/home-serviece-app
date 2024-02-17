import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heading = ({ heading, isViewAll = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      {isViewAll && <Text>View All</Text>}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
