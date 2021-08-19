import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import RegisterButton from "./app/components/RegisterButton";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card/Card";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.eggwhite,
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
