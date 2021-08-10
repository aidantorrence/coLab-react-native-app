import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import * as yup from 'yup';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const defaultFormValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(6),
});

export default function LoginScreen({ navigation }) {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: defaultFormValues,
    validationSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={values.email}
        onChangeText={handleChange('email')}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      <Button onPress={handleSubmit} title="Login" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: 'gray',
    textAlign: 'left',
    borderRadius: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    width: 100,
  },
});
