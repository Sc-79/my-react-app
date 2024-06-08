import { Image, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import imagess from "../constants/images";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const HomePage = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="bg-black h-full h-full">
          <ScrollView contentContainerStyle style={{ height: "100%" }}>
            <View className="h-full flex-col items-center justify-center px-4">
              <Image source={imagess.logo} resizeMode="contain" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
};

export default HomePage;
