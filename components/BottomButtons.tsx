import { View } from "react-native";
import Button from "./Button";
import React from "react";

const BottomButtons = ({
  handleClear,
  handleClick,
  handleClickDelete,
  handleClickOperator,
  handleClickEqual,
}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexWrap: "wrap",
      }}
    >
      <Button onClick={handleClear} content="C" />
      <Button onClick={handleClick} content="7" />
      <Button onClick={handleClick} content="4" />
      <Button onClick={handleClick} content="1" />
      <Button onClick={handleClick} content="00" />
      <Button onClick={handleClickOperator} content="%" />
      <Button onClick={handleClick} content="8" />
      <Button onClick={handleClick} content="5" />
      <Button onClick={handleClick} content="2" />
      <Button onClick={handleClick} content="0" />
      <Button onClick={handleClickDelete} content="x" />
      <Button onClick={handleClick} content="9" />
      <Button onClick={handleClick} content="6" />
      <Button onClick={handleClick} content="3" />
      <Button onClick={handleClick} content="." />
      <Button onClick={handleClickOperator} content="/" />
      <Button onClick={handleClickOperator} content="*" />
      <Button onClick={handleClickOperator} content="-" />
      <Button onClick={handleClickOperator} content="+" />
      <Button onClick={handleClickEqual} content="=" />
    </View>
  );
};

export default BottomButtons;
