import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BottomTabs() {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="shopping-basket" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity style={{ flex: 1 }}>
    <View style={{ alignItems: "center" }}>
      <FontAwesome
        name={props.name}
        size={25}
        style={{
          marginBottom: 3,
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
