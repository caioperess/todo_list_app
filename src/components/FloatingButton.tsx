import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import AppStyles from "../styles/style";
import { useNavigation } from "@react-navigation/native";

export default function FloatingButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => navigation.navigate("Create")}
    >
      <AntDesign name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.COLORS.red,
  },
});
