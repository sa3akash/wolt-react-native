import { Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Fonts } from "@/constants/theme";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import OtherAuthButton from "@/components/auth/OtherAuthButton";
import SmoothInfiniteScroll from "@/components/SmoothInfiniteScroll";

const PublicIndex = () => {
  const openWebBrowser = () => {
    Linking.openURL("https://github.com/sa3akash");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <SmoothInfiniteScroll scrollDirection="down" iconSet="set1"/>
        <SmoothInfiniteScroll scrollDirection="up" iconSet="set2"/>
        <SmoothInfiniteScroll scrollDirection="down" iconSet="set3"/>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        {/* login buttons */}

        <View style={styles.buttonsContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <OtherAuthButton />
          </Animated.View>
        </View>

        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit{" "}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{" "}
            to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default PublicIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    fontWeight: "900",
    lineHeight: 36,
  },
  buttonsContainer: {
    gap: 12,
    width: "100%",
    paddingHorizontal: 30,
  },

  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285f4",
    textDecorationLine: "underline",
  },

  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
    position: "relative"
  },
});
