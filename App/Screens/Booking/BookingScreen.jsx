import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import PageHeadning from "../../Components/PageHeadning";
import { bookedService } from "../../config/data";
import BusinessListItem from "../BusinessListByCategory/BusinessListItem";

const BookingScreen = () => {
  const [bookings, setBookings] = useState(bookedService);
  const [isLoading, setIsLoading] = useState(false);

  const handlerefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setBookings(bookedService);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 26, margin: 10 }}>
        My Bookings
      </Text>
      <View>
        <FlatList
          data={bookings}
          onRefresh={() => handlerefresh()}
          refreshing={isLoading}
          renderItem={({ item, index }) => (
            <BusinessListItem
              index={index}
              business={item?.business1}
              booking={item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
