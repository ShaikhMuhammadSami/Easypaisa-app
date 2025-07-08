import { router } from "expo-router";
import React from "react";
import { Text, View,SafeAreaView,Image, TextInput, TouchableOpacity } from "react-native";

export default function Index() {

  return (
    <SafeAreaView className="relative h-full flex justify-center items-center">
      <Image className="absolute bottom-0 h-full" source={require('../assets/images/login-img.jpg')}></Image>
      <View className="w-[80%] mx-auto">
        <View className="">
          <Text className="text-6xl mt-8 mb-2 text-center font-semibold text-black">Welcome</Text>
          <Text className="tracking-wide mt-2 mb-5 text-center text-black">Sign in to your account</Text>
        </View>
        <View>
          {/* First Input Container For User Email */}
          <View className="flex-row gap-3 p-1 bg-white items-center mt-10 rounded-full shadow-black shadow-xl border border-green-500">
          <Image className="ml-5" source={require('../assets/images/email.png')}></Image>
          <TextInput className="w-[70%]"
          placeholder="Enter Your Email"
          keyboardType="email-address"
          >
          </TextInput>
        </View>
        {/* Second Input Container For User Password */}
        <View className="flex-row p-1 gap-3 bg-white items-center mt-10 rounded-full shadow-black shadow-xl border border-green-500">
          <Image className="ml-5" source={require('../assets/images/password.png')}></Image>
          <TextInput className="w-[70%]"
          placeholder="******"
          secureTextEntry={true}
          >
          </TextInput>
        </View>
        <Text className="text-right text-[#847f7f] pr-4 mt-5">Forgot your password?</Text>
        <View className="flex-row items-center justify-end mt-20 gap-4">
          <Text className="text-3xl font-bold">Sign in</Text>
          <TouchableOpacity onPress={() => router.push("/Home")}>
            <Image source={require('../assets/images/arrow-2.png')} className="rounded-full w-[70px]"></Image>
          </TouchableOpacity>
        </View>
          <Text className="text-center mt-40 font-semibold text-lg">Don't have an account? <Text className="text-blue-700" onPress={() => router.push("/Signup")}> Sign up </Text></Text>
        </View>
      </View>
  </SafeAreaView>
  );
}
