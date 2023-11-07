import React, { useState, useRef } from "react";
import { StatusBar, Keyboard } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [buttonText, setButtonText] = useState("Calculate");
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const billInputRef = useRef(null); // Create a ref for the bill input
  const tipInputRef = useRef(null); // Create a ref for the tip input

  function calculateTip() {
    let bill = parseFloat(billInput);
    let tip = parseFloat(tipInput);
    let tipAmount = bill * (tip / 100);
    let total = bill + tipAmount;
    total = Math.ceil(total * 100) / 100;

    // Store the calculated values in state
    setTipAmount(tipAmount);
    setTotalAmount(total);
    setIsCalculated(true);
    setButtonText("Reset");
  }

  const handleButtonPress = () => {
    if (buttonText === "Calculate") {
      calculateTip();
      Keyboard.dismiss();
    } else {
      // Reset the input fields and change button text back to "Calculate"
      setBillInput("");
      setTipInput("");
      setButtonText("Calculate");
      setIsCalculated(false);
    }

    // Use refs to blur (lose focus) on input fields
    billInputRef.current.blur();
    tipInputRef.current.blur();
  };

  return (
    <View style={styles.container}>
      <Text>Tip Calculator</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Your Total Bill: "
        onChangeText={(text) => setBillInput(text)}
        value={billInput}
        keyboardType="numeric"
        ref={billInputRef} // Set the ref for the bill input
      />
      <TextInput
        style={styles.inputField}
        placeholder="Your Tip Percentage: "
        onChangeText={(text) => setTipInput(text)}
        value={tipInput}
        keyboardType="numeric"
        ref={tipInputRef} // Set the ref for the tip input
      />
      <TouchableOpacity
        style={styles.button}
        title="Calculate"
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {isCalculated && (
        <View>
          <Text>Your tip amount is: ${tipAmount.toFixed(2)}</Text>
          <Text>Your total amount is: ${totalAmount.toFixed(2)}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    height: 40,
    margin: 10,
    width: 300,
    borderColor: "#088",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
  },
  button: {
    margin: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#088",
    padding: 10,
    height: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
