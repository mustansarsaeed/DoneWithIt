import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItemDelete from "../components/ListItemDelete";

const initialMessages = [
  {
    id: 1,
    title: "Mustansar Saeed",
    description: "Hi! Is this item still available?",
    image: require("../assets/mustansar.jpeg"),
  },
  {
    id: 2,
    title: "Mustansar Saeed",
    description: "When are you available to talk about this item?",
    image: require("../assets/mustansar.jpeg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  function handleDelete(message) {
    setMessages(messages.filter((m) => message.id !== m.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("item selected", item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
