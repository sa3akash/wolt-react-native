import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-google" size={24} color="white" />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#4285f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    gap: 8,
  },
  googleButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
