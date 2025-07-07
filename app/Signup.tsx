import { useRouter } from "expo-router";
import React from "react";
import { Text, View,SafeAreaView,Image, TextInput, TouchableOpacity } from "react-native";

const Signup = () => {
    const router = useRouter();

  return (
    <SafeAreaView className="relative h-full flex justify-center items-center">
      <Image className="absolute bottom-0 h-full" source={require('../assets/images/login-img.jpg')}></Image>
        <View className="w-[80%] mx-auto">
        <View className="">
            <Text className="text-4xl mb-3 text-center font-bold text-black scale-y-110">Create your</Text>
            <Text className="text-4xl text-center font-bold text-black scale-y-110">EasyPaisa Account</Text>
        </View>
        <View className="flex flex-col gap-8 mt-14">
            <View className="flex-row gap-3 p-1 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                {/* First Input Container For User Email */}
                <Image className="ml-5" source={require('../assets/images/profile.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="Username"
                >
                </TextInput>
            </View>
            <View className="flex-row gap-3 p-1 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                {/* First Input Container For User Email */}
                <Image className="ml-5" source={require('../assets/images/email.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="Enter Your Email"
                keyboardType="email-address"
                >
                </TextInput>
            </View>
            {/* Second Input Container For User Password */}
            <View className="flex-row p-1 gap-3 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                <Image className="ml-5" source={require('../assets/images/password.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="******"
                secureTextEntry={true}
                >
                </TextInput>
            </View>
            <View className="flex-row p-1 gap-3 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                <Image className="ml-5" source={require('../assets/images/mobile.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="Mobile"
                keyboardType="phone-pad"
                >
                </TextInput>
            </View>
        </View>
        <Text className="text-right text-[#847f7f] pr-4 mt-5">Forgot your password?</Text>
        <View>
            <View className="flex-row items-center justify-end mt-10 gap-4">
                <Text className="text-3xl font-bold">Create</Text>
                <TouchableOpacity onPress={() => router.push("/Home")}>
                    <Image source={require('../assets/images/arrow-2.png')} className="rounded-full w-[60px] h-10"></Image>
                </TouchableOpacity>
            </View>
                <Text className="text-center mt-10 font-bold text-[#4000ff] text-lg">Or create account using social media</Text>
            </View>
            <View className="flex-row justify-center mt-8 gap-3">
                <Image source={require('../assets/images/facebook.png')}></Image>
                <Image source={require('../assets/images/Twitter.png')}></Image>
                <Image source={require('../assets/images/Google.png')}></Image>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Signup

