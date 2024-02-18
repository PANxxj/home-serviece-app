import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "./Header";
import Slider from "./Slider";
import axios from "axios";
import Category from "./Category";
import BuinessList from "./BuinessList";

const HomeScreen = () => {
  //   const getData = async () => {
  //     try {
  //       const res = await axios.get("http://192.168.29.155:8000/api/get_user/1", {
  //         headers: {
  //           Authorization: "token token6",
  //         },
  //       });
  //       console.warn("res", res.data);
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Category />
        <BuinessList/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
