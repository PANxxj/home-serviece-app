import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeadning from "../../Components/PageHeadning";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import { TextInput } from "react-native-gesture-handler";

const BookingModal = ({ hideModal }) => {
  const navigation = useNavigation();
  const [TimeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState("");
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  useEffect(() => {
    getTime();
  }, []);
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
          onPress={() => hideModal()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
            {"Book Now"}
          </Text>
        </TouchableOpacity>
        <Heading heading={"Select Date"} />
        <View style={styles.calenderContainer}>
          <CalendarPicker
            width={340}
            minDate={Date.now()}
            onDateChange={setSelectedDate}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayColor={Colors.PRIMARY}
            selectedDayTextColor={Colors.WHITE}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Heading heading={"Select Time Slot"} />
          <FlatList
            data={TimeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime
                  }
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Heading heading={"Any Suggestion Note"} />
          <TextInput
            placeholder="Note"
            style={styles.noteText}
            numberOfLines={4}
            onChange={(e) => console.log("")}
          />
        </View>
        <TouchableOpacity style={{ marginTop: 15 }}>
          <Text style={styles.confrimBtn}>Confrim & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BookingModal;

const styles = StyleSheet.create({
  calenderContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.WHITE,
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.PRIMARY,
  },
  noteText: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    textAlignVertical: "top",
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: Colors.PRIMARY,
  },
  confrimBtn: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "outfit",
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 15,
    // marginTop: 15,
    borderRadius: 99,
    elevation: 2,
  },
});
