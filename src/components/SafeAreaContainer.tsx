import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppStyles from "../styles/style";

type SafeAreaContainerProps = {
  children: React.ReactNode;
};

export default function SafeAreaContainer({
  children,
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView style={{ backgroundColor: AppStyles.COLORS.primary }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
