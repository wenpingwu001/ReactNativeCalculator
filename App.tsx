import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BottomButtons from "./components/BottomButtons";

const operators = ["+", "-", "*", "%", "/"];
export default function App() {
  const [result, setResult] = useState<number>();
  const [evaluation, setEvaluation] = useState<string>("");

  const handleClick = (value: any) => {
    if (evaluation === "") {
      setEvaluation(value);
      return;
    }
    if (operators.includes(evaluation[evaluation.length - 1])) {
      setResult(Function("return " + evaluation + value)());
    }
    setEvaluation((l) => l + value);
  };
  const handleClear = () => {
    setEvaluation("");
    setResult(0);
  };
  const handleClickDelete = () => {
    const _evaluation = evaluation.substring(0, evaluation.length - 1);
    setEvaluation(_evaluation);
  };
  const handleClickOperator = (content: string) => {
    if (evaluation === "") return;
    if (operators.includes(evaluation[evaluation.length - 1])) return;
    setEvaluation((l) => l + content);
  };
  const handleClickEqual = () => {
    setResult(Function("return " + evaluation)());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ flex: 1, textAlign: "center" }}>计算器</Text>
      </View>
      <View style={styles.texts}>
        <Text style={{ textAlign: "right", fontSize: 40 }}>{evaluation}</Text>
        <Text style={styles.result}>{result !== 0 && result}</Text>
      </View>
      <BottomButtons
        handleClear={handleClear}
        handleClick={handleClick}
        handleClickDelete={handleClickDelete}
        handleClickEqual={handleClickEqual}
        handleClickOperator={handleClickOperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texts: {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 10,
  },
  result: {
    flexShrink: 1,
    textAlign: "right",
    fontSize: 30,
    height: 40,
    marginBottom: 20,
    color: "gray",
  },
});
