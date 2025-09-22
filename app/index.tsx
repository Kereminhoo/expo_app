import React from "react";
import { View } from "react-native";
import WelcomeMessage from "../components/welcomemessage"; // chemin relatif selon ton projet

export default function App() {
  return (
    <View>
      <WelcomeMessage name="Ali" />
      <WelcomeMessage name="Fatma" />
      <WelcomeMessage name="John" />
    </View>
  );
}
