import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_joinstyle";
import { router } from "expo-router";
import { HEROLOGO, BACKGROUNDIMAGE } from "@/constants";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={{ flex: 1, width: "100%", height: Dimensions.get("window").height }}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.iconsection}>
              <Image source={HEROLOGO} style={{ width: 50, height: 50 }} />
            </View>

            {/* Title & Subtitle */}
            <View style={styles.titleTextGroup}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <Text style={styles.subText}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>

            {/* Buttons */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={[styles.secondaryButtonGroup, { paddingHorizontal: 20 }]}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push("/join")}
                >
                  <Text style={styles.buttonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.transparentButton}
                  onPress={() => router.push("/signin")}
                >
                  <Text style={styles.secondaryButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
