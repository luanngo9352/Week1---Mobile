import React from 'react';
import {View, Text} from 'react-native';

interface IHomeScreenProps {}

const Home: React.FC<IHomeScreenProps> = props => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 20}}>Week 1 - Home Screen</Text>
    </View>
  );
};

export default Home;
