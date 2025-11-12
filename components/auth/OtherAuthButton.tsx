import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const OtherAuthButton = () => {
  return (
    <TouchableOpacity style={styles.otherButton}>
      <Text style={styles.otherButtonText}>Other options</Text>
    </TouchableOpacity>
  );
};

export default OtherAuthButton;

const styles = StyleSheet.create({
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    gap: 8,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "600",
  },
});
