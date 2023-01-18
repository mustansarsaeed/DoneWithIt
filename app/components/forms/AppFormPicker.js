import { useFormikContext } from "formik";
import React from "react";
import { number } from "yup";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  name,
  numberOfColumns,
  categories,
  width,
  PickerItemComponent,
  placeholder,
}) {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  console.log("values=>", values);
  console.log("errors=>", errors);
  console.log("touched=>", touched);

  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        items={categories}
        width={width}
        onSelectItem={(v) => setFieldValue(name, v)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
