import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={24} color="white" />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
};

export default AppleAuthButton;

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000000e6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    gap: 8,
  },
  appleButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
