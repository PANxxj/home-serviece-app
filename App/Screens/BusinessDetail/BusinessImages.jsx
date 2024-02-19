import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";

const BusinessImages = ({ images }) => {
  return (
    <View>
      <Heading heading={"Images"} />
      <FlatList
        data={images.image}
        numColumns={2}
        renderItem={(item, index) => (
          <Image
            source={require("../../../assets/guy.jpg")}
            style={{
              width: "100%",
              height: 120,
              flex: 1,
              borderRadius: 15,
              margin: 7,
            }}
          />
        )}
      />
    </View>
  );
};

export default BusinessImages;

const styles = StyleSheet.create({});
