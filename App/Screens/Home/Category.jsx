import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import { categories } from "../../config/data";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <Heading heading={"Categories"} isViewAll={true} />
      <FlatList
        numColumns={4}
        data={categories}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", {
                  category: item.name,
                })
              }
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={item.icon}
                  style={{ height: 30, width: 30 }}
                  size={25}
                  color={item.color ? item.color : "black"}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }
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
