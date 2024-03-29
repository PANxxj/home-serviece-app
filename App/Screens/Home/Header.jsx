import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  //   const { user, isLoading } = useUser();
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../assets/girl.jpg")}
            style={styles.userImage}
          />
          {/* <Image source={{uri:user.?imageUrl}} style={styles.userImage} /> */}
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
              Welcome,
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              Janki Sita 
            </Text>
            {/* <Text>{user?.fullname}</Text> */}
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>

      {/* Search bar Section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <FontAwesome
          name="search"
          size={27}
          color={Colors.PRIMARY}
          style={styles.searchBtn}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit",
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
