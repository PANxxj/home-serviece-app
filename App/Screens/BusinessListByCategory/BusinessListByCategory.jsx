import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { data, businessList } from "../../config/data";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";

const BusinessListByCategory = () => {
  const param = useRoute().params;
  const [data1, setdata1] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    setdata1(
      businessList.filter((item) => item.category.name == param.category)
    );
  }, [param]);
  console.log(data1);
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param?.category}
        </Text>
      </TouchableOpacity>
      {data1?.length > 0 ? (
        <FlatList
          data={data1}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item} index={index} />
          )}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: "30%",
            color: Colors.GRAY,
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;

const styles = StyleSheet.create({});
