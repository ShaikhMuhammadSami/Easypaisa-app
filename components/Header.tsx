import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View className="flex-row items-center justify-between px-4 pt-8 bg-[#21b573] h-28">
      {/* Profile Icon Placeholder */}
      <TouchableOpacity>
        <View className="w-9 h-9 rounded-full border-2 border-white bg-gray-300" />
      </TouchableOpacity>
      {/* Logo */}
      <Text className="text-white text-2xl font-bold tracking-widest">Easypaisa</Text>
      {/* Icons Placeholder */}
      <View className="flex-row gap-3">
        <TouchableOpacity>
          <View className="w-6 h-6 rounded-full bg-gray-300" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="w-6 h-6 rounded-full bg-gray-300" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header; 