// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import PersonalInformation from './screens/PersonalInformation';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PERSONAL_INFORMATION"
          options={{
            header: () => (
              <SafeAreaView>
                <View>
                  <Text style={{fontSize: 20, textAlign: 'center'}}>
                    Personal Information
                  </Text>
                </View>
              </SafeAreaView>
            ),
          }}
          component={PersonalInformation}
        />
        <Stack.Screen
          name="HOME"
          component={Home}
          options={{
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
