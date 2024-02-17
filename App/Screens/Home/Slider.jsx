import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { data } from "../../config/data";
import Heading from "../../Components/Heading";

const Slider = () => {
  return (
    <View>
      {/* <Text style={styles.heading}>Offers for you</Text> */}
      <Heading heading={"Offers for you"} />
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={require(`../../../assets/Slider1.png`)}
              style={styles.sliderImage}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* {data.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))} */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 35,
    objectFit: "contain",
  },
});
