import React, { useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import LandingPage from '@components/LandingPage';
import Introduction from '@components/Introduction';
import Goal from '@components/Goal';
import HomePage from '@components/HomePage';
import AuthScreen from '@screens/AuthScreen';

// Utils
import { UserContext } from '@contexts/UserContext';
import SampleContext from '@contexts/SampleContext';
import { auth } from '@utils/firebase';

const Stack = createStackNavigator();

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  const value = useMemo(() => ({ user, loading, error }), [user, loading, error]);

  const [sampleValue, setSampleValue] = useState();
  const sample = useMemo(() => [sampleValue, setSampleValue], [sampleValue]);

  return (
    <UserContext.Provider value={value}>
      <SampleContext.Provider value={sample}>
        <NavigationContainer>
          <Stack.Navigator>
            <Screen.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Welcome" component={LandingPage} />
            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="Goal" component={Goal} />
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SampleContext.Provider>
    </UserContext.Provider>
  );
}
