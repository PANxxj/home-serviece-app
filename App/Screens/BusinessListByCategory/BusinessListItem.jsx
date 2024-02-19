import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {} from "../../../assets/guy.jpg";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BusinessListItem = ({ business, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("business-detail", {
          business: business,
        })
      }
    >
      <Image
        source={
          index % 2 == 0
            ? require("../../../assets/girl.jpg")
            : require("../../../assets/guy1.jpg")
        }
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontFamily: "outfit", fontSize: 15, color: Colors.GRAY }}
        >
          {business?.contactPerson}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
          {business?.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 16, color: Colors.GRAY }}
        >
          <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 8,
  },
});
