import React from "react";

import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";

const categories = [
  {
    id: 1,
    label: "Furniture",
  },
  {
    id: 2,
    label: "Clothing",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});

function ListEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: 0, category: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Title"
          maxLength={255}
          autoCapitalize="none"
          name="title"
        />

        <AppFormField
          placeholder="Price"
          maxLength={8}
          width={150}
          autoCapitalize="none"
          keyboardType="numeric"
          name="price"
        />

        <AppFormPicker
          name="category"
          placeholder="Category"
          width={150}
          categories={categories}
        />

        <AppFormField
          placeholder="Description"
          maxLength={255}
          autoCapitalize="none"
          name="description"
          multiline
          numberOfLines={3}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
