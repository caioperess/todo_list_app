import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import AppStyles from "../../styles/style";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTodo } from "../../hooks/todoContext";

const CreateTodoPage = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <View style={style.container}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            flexDirection: "row",
          }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontFamily: AppStyles.FONTS.md,
              fontSize: 16,
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 35}}>
          <Text style={style.label}>Nome:</Text>
          <TextInput
            style={style.input}
            placeholder="Nome do todo"
            onChangeText={(value) => setText(value)}
          />

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              addTodo(text);
              navigation.goBack();
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: AppStyles.FONTS.lg,
                fontSize: 16,
              }}
            >
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.COLORS.backgroundColor,
    width: "100%",
    padding: 20,
    justifyContent: "flex-start",
  },

  input: {
    borderWidth: 1,
    borderColor: AppStyles.COLORS.red,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 40,
    fontFamily: AppStyles.FONTS.md,
    color: "#000",
    paddingHorizontal: 10,
  },

  label: {
    color: "#fff",
    fontFamily: AppStyles.FONTS.md,
    fontSize: 14,
    paddingLeft: 5,
    marginBottom: 2,
  },

  button: {
    backgroundColor: AppStyles.COLORS.red,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    height: 40,
  },
});

export default CreateTodoPage;
