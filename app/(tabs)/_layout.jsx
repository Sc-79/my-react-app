import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons"; // Ensure this path is correct

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className=" items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 "
      />
      <Text className ={`${focused? 'font-bold' : 'font-pregular'} text-sm` } style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const LabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth:1,
        borderTopColor:"#232533",
        height: 84,
      }
    }}
    
     >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} focused={focused} name="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarLabel: () => null,
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.bookmark} color={color} focused={focused} name="Bookmark" />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarLabel: () => null,
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.plus} color={color} focused={focused} name="Create" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: () => null,
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profile} color={color} focused={focused} name="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default LabsLayout;
