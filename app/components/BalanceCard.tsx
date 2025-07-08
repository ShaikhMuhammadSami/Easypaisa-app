import { View, Text, TouchableOpacity } from 'react-native';

const BalanceCard = () => {
  return (
    <View className="bg-white w-full rounded-2xl shadow p-4 mt-4 mx-auto max-w-xs relative">
      {/* My Rewards Button */}
      <TouchableOpacity className="absolute right-4 top-4 bg-yellow-400 px-3 py-1 rounded-full">
        <Text className="text-xs font-semibold">My Rewards</Text>
      </TouchableOpacity>
      {/* Logo and Balance */}
      <Text className="text-lg font-bold text-gray-800">easypaisa</Text>
      <Text className="text-xs text-gray-500 mt-1">Available Balance</Text>
      <View className="flex-row items-center mt-1">
        <Text className="text-2xl font-extrabold text-black">Rs. 1,000,000</Text>
        <View className="w-4 h-4 ml-2 rounded-full bg-gray-300" />
      </View>
      <View className="flex-row items-center mt-1">
        <View className="w-3 h-3 mr-1 rounded-full bg-gray-300" />
        <Text className="text-xs text-gray-400">Last Updated 4 min ago</Text>
      </View>
      {/* Action Buttons */}
      <View className="flex-row mt-4 space-x-2">
        <TouchableOpacity className="flex-1 bg-gray-200 py-2 rounded-full">
          <Text className="text-center text-xs font-semibold text-gray-700">Upgrade Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#21b573] py-2 rounded-full">
          <Text className="text-center text-xs font-semibold text-white">Add Cash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceCard; 