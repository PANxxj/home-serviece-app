import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import BusinessImages from "./BusinessImages";
import BookingModal from "./BookingModal";
// import { Ionicons } from "@expo/vector-icons";

const BusinessDetail = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const [data, setData] = useState(params.business);
  const [lines, setLines] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   setData(params.business);
  // }, [params]);
  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/girl.jpg")}
          style={{ width: "100%", height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            {data?.name}
          </Text>
          <View style={styles.subContainer}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.PRIMARY,
                fontSize: 20,
              }}
            >
              {data?.contactPerson}
            </Text>
            <Text
              style={{
                color: Colors.PRIMARY,
                backgroundColor: Colors.PRIMARY_LIGHT,
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {data?.category?.name}
            </Text>
          </View>
          <Text
            style={{ fontSize: 17, fontFamily: "outfit", color: Colors.GRAY }}
          >
            <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
            {data?.address}
          </Text>
          {/* Horizontal Line */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          {/* About Section */}
          <View>
            <Heading heading={"About"} />
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.GRAY,
                fontSize: 16,
                lineHeight: 25,
              }}
              numberOfLines={lines ? 10 : 5}
            >
              {
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo repudiandae id voluptatibus assumenda omnis Nemo repudiandae id voluptatibus assumenda omnis, officia natus unde numquam sequi ipsum placeat sed ab recusandae, eum cumque  unde numquam sequi ipsum placeat sed ab recusandae, eum cumque  unde numquam sequi ipsum placeat sed ab recusandae, eum cumque rem at quia quo. "
              }
            </Text>
            <TouchableOpacity onPress={() => setLines(!lines)}>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontFamily: "outfit",
                  fontSize: 16,
                }}
              >
                {lines ? "Show Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessImages images={data} />
        </View>
      </ScrollView>
      <View
        style={{ display: "flex", flexDirection: "row", gap: 10, margin: 5 }}
      >
        <TouchableOpacity style={styles.messageBtn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.PRIMARY,
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
              fontSize: 18,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModal}>
        <BookingModal hideModal={() => setShowModal(false)} />
      </Modal>
    </View>
  );
};

export default BusinessDetail;

const styles = StyleSheet.create({
  backContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
    marginTop: 15,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
