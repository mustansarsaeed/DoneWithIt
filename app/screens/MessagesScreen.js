import React from "react";
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
import { getBackgroundColor } from "../../node_modules/react-native/Libraries/LogBox/UI/LogBoxStyle";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen(props) {
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
              <View style={{ getBackgroundColor: "red", width: 70 }}>
                {/* <MaterialCommunityIcons name="trash-can" /> */}
              </View>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
