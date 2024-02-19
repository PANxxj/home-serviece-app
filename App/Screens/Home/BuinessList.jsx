import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";
import { businessList } from "../../config/data";
import BusinessListItem from "./BusinessListItem";

const BuinessList = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Heading heading={"Latest Business"} isViewAll={true} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItem data={item} />
          </View>
        )}
      />
    </View>
  );
};

export default BuinessList;

const styles = StyleSheet.create({});
