import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TodoProvider } from "./todoContext";

type HookProvidersProps = {
  children: React.ReactNode;
};

export default function HookProviders({ children }: HookProvidersProps) {
  return (
    <SafeAreaProvider>
      <TodoProvider>{children}</TodoProvider>
    </SafeAreaProvider>
  );
}
