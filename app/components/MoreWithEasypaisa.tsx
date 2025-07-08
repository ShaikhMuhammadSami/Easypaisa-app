import { View, Text } from 'react-native';

const features = [
  { label: 'Easyload' },
  { label: 'Easycash Loan' },
  { label: 'Rs.1 Game' },
  { label: 'Invite & Earn' },
  { label: 'Raast Payment' },
  { label: 'Mini App' },
  { label: 'Savings' },
  { label: 'Buy Now\nPay Later' },
  { label: 'Insurance' },
  { label: 'Donations' },
  { label: 'Tohfa' },
  { label: 'See All' },
];

const MoreWithEasypaisa = () => (
  <View className="bg-white mx-4 mt-4 rounded-2xl p-4">
    <Text className="text-base font-bold text-gray-800 mb-2">More with Easypaisa</Text>
    <View className="flex-row flex-wrap justify-between">
      {features.map((feature, idx) => (
        <View key={idx} className="w-1/4 items-center mb-6">
          <View className="w-8 h-8 mb-2 rounded-full bg-gray-300" />
          <Text className="text-xs text-center text-gray-700 leading-tight">{feature.label}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default MoreWithEasypaisa; 