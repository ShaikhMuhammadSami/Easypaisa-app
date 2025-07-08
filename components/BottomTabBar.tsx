import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const tabs = [
  { label: 'Home',link : '/Home' },
  { label: 'Cash Points',link : '' },
  { label: 'Promotions',link : '' },
  { label: 'My Account',link : '' },
];

const BottomTabBar = () => (
  <View className="flex-row justify-between items-center bg-white px-4 py-5 pb-14 border-t border-gray-200 absolute bottom-0 left-0 right-0">
    {tabs.map((tab, idx) => (
      <View key={idx} className="flex-1 items-center">
        <TouchableOpacity className="flex-1 items-center">
          <View className="w-6 h-6 mb-1 rounded-full bg-gray-300" />
          <Text className="text-xs text-gray-700">{tab.label}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

export default BottomTabBar; 