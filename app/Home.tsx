import { View, ScrollView } from 'react-native'
import Header from './components/Header'
import BalanceCard from './components/BalanceCard'
import QuickActions from './components/QuickActions'
import MoreWithEasypaisa from './components/MoreWithEasypaisa'
import BottomTabBar from './components/BottomTabBar'

const Home = () => {
  return (
    <View className='flex-1 bg-[#f6f6f6]'>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        <BalanceCard />
        <QuickActions />
        <MoreWithEasypaisa />
      </ScrollView>
      <BottomTabBar />
    </View>
  )
}

export default Home
