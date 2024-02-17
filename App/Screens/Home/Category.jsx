import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import { categories } from "../../config/data";
import Colors from "../../Utils/Colors";

const Category = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Heading heading={"Categories"} isViewAll={true} />
      <FlatList
        numColumns={4}
        data={categories}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={item.icon}
                style={{ height: 30, width: 30 }}
                size={25}
                color="black"
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
    // <MaterialCommunityIcons name="table-furniture" size={24} color="black" />
  );
};

export default Category;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
