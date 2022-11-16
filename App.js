import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <MessagesScreen />;
}