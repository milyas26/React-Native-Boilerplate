import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chats from './Chats';
import Feeds from './Feeds';

const Instagram = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
};

export default Instagram;

const styles = StyleSheet.create({});
