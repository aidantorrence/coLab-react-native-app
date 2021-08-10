import { useFormik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import * as yup from 'yup';

const defaultFormValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(6)
});

export default function AuthScreen({ navigation }) {
  const {values, handleSubmit, handleChange} = useFormik({
    initialValues: defaultFormValues,
    validationSchema
  })

  return (
    <View>
      <TextInput
        style={}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={values.email}
        name='email'
        onChangeText={handleChange}
      />
      <TextInput
      style={}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={values.password}
        name='email'
        onChangeText={handleChange}/>
      <Button onPress={handleSubmit} title='Login' />
    </View>
  );
}
