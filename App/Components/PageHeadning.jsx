import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PageHeadning = ({ title }) => {
  const navigation = useNavigation();
  return (
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
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PageHeadning;

const styles = StyleSheet.create({});
