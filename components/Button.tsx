import { Pressable, Text, Dimensions } from "react-native";
import React, { useState } from "react";

const Button = (props: any) => {
  const [buttonColor, setButtonColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const screen = Dimensions.get("screen");
  return (
    <Pressable
      onPressIn={() => {
        setButtonColor("blue");
        setTextColor("white");
      }}
      onPressOut={() => {
        setButtonColor("white");
        setTextColor("black");
      }}
      onPress={() => {
        props.onClick(props.content);
      }}
      style={{
        paddingVertical: 15,
        paddingHorizontal: 38,
        backgroundColor: props.content === "=" ? "gold" : buttonColor,
      }}
    >
      <Text style={{ fontSize: 30, textAlign: "center", color: textColor }}>
        {props.content}
      </Text>
    </Pressable>
  );
};

export default Button;
