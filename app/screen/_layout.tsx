import React from "react";
import { Tabs } from "expo-router";
import AppColor from "../../src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: AppColor.activeTint,
        tabBarInactiveTintColor: AppColor.inActiveTint,
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
          bottom: 3,
        },
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            height: 50,
            borderRadius: 10,
            backgroundColor: AppColor.primary,
            borderTopWidth: 0,
          },
          null,
        ],
      }}
    >
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={
                focused
                  ? [
                      styles.tabs,
                      {
                        ...{
                          backgroundColor: focused
                            ? AppColor.secondary
                            : AppColor.primary,
                        },
                      },
                    ]
                  : null
              }
            >
              <MaterialIcons
                color={focused ? AppColor.activeTint : AppColor.inActiveTint}
                name="search"
                size={24}
              />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Movies"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View
                style={
                  focused
                    ? [
                        styles.tabs,
                        {
                          ...{
                            backgroundColor: focused
                              ? AppColor.secondary
                              : AppColor.primary,
                          },
                        },
                      ]
                    : null
                }
              >
                <MaterialIcons
                  color={focused ? AppColor.activeTint : AppColor.inActiveTint}
                  name="movie"
                  size={24}
                />
              </View>
            );
          },
        }}
      ></Tabs.Screen>
      {/* <Tabs.Screen
        name="Login"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={
                focused
                  ? [
                      styles.tabs,
                      {
                        ...{
                          backgroundColor: focused
                            ? AppColor.secondary
                            : AppColor.primary,
                        },
                      },
                    ]
                  : null
              }
            >
              <MaterialIcons
                color={focused ? AppColor.activeTint : AppColor.inActiveTint}
                name="person"
                size={24}
              />
            </View>
          ),
        }}
      ></Tabs.Screen> */}
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    width: 50,
    height: 50,
    borderRadius: 50,
    bottom: 15,
    borderColor: "orange",
    borderWidth: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
