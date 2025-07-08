import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const actions = [
  { label: 'Send Money' },
  { label: 'Bill Payment' },
  { label: 'Mobile Packages' },
];

const QuickActions = () => (
  <View className="flex-row justify-between mx-4 mt-4">
    {actions.map((action, idx) => (
      <TouchableOpacity key={idx} className="flex-1 bg-white rounded-2xl items-center py-4 mx-1 shadow">
        <View className="w-8 h-8 mb-2 rounded-full bg-gray-300" />
        <Text className="text-xs font-semibold text-gray-700">{action.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default QuickActions; 