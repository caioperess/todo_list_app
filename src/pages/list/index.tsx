import React from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";

import HeaderImg from "../../assets/masthead.png";
import AppStyles from "../../styles/style";
import FloatingButton from "../../components/FloatingButton";
import { useTodo } from "../../hooks/todoContext";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";

const ListPage = () => {
  const { todos, removeTodo } = useTodo();

  return (
    <SafeAreaContainer>
      <ImageBackground
        style={style.header}
        source={HeaderImg}
        resizeMode="cover"
      >
        <Text style={style.headerText}>Bem Vindo, usuario</Text>
      </ImageBackground>

      <View style={style.taskList}>
        <FlatList
          data={todos}
          extraData={todos}
          contentContainerStyle={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 20,
          }}
          ListEmptyComponent={() => (
            <Text style={{ color: "#fff", fontFamily: AppStyles.FONTS.sm }}>
              Não há itens
            </Text>
          )}
          renderItem={({ item }) => (
            <Swipeable
              overshootRight={false}
              renderRightActions={(progress, dragX) => {
                const trans = dragX.interpolate({
                  inputRange: [0, 100],
                  outputRange: [-10, 0],
                });
                return (
                  <Animated.View
                    style={{
                      transform: [{ translateX: trans }],
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => removeTodo(item)}
                      style={{
                        width: 100,
                        padding: 15,
                        backgroundColor: "red",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Feather name="trash" size={24} color={"#fff"} />
                    </TouchableOpacity>
                  </Animated.View>
                );
              }}
            >
              <View
                style={{
                  maxWidth: "100%",
                  padding: 15,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#423c3a",
                  marginVertical: 5,
                }}
              >
                <Text style={{ color: "#fff", fontFamily: AppStyles.FONTS.sm }}>
                  {item}
                </Text>
              </View>
            </Swipeable>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>

      <FloatingButton />
    </SafeAreaContainer>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  taskList: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#201D1C",
  },

  headerText: {
    fontFamily: AppStyles.FONTS.lg,
    color: "#fff",
    marginBottom: "14%",
    paddingLeft: 20,
    fontSize: 25,
  },
});

export default ListPage;
