import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View,SafeAreaView,Image, TextInput, TouchableOpacity } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db }  from "../firebase.config"; 
import { query, where, getDocs } from "firebase/firestore";


const Signup = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const sendData = async () => {
        if(email === "" || password === "" || name === "" || phone === ""){
            setError("Something went wrong");
            setTimeout(() => setError(""), 3000);
            return;
        }

        if(password.length < 6){
            setError("Password must be at least 6 characters");
            setTimeout(() => setError(""), 3000);
            return;
        }
        
        // Checking if email already exists
        const q = query(collection(db, "users"), where("userEmail", "==", email));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            setError("Email already exists");
            setTimeout(() => setError(""), 3000);
            return;
        }

        // If not exists, add user
        await addDoc(collection(db, "users"), {
            userName: name,
            userEmail: email,
            userPassword: password,
            userPhone: phone
        });
        router.push("/Home");
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");
    };


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
                value={name}
                onChangeText={setName}
                >
                </TextInput>
            </View>
            <View className="flex-row gap-3 p-1 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                {/* First Input Container For User Email */}
                <Image className="ml-5" source={require('../assets/images/email.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="Enter Your Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                >
                </TextInput>
            </View>
            {/* Second Input Container For User Password */}
            <View className="flex-row p-1 gap-3 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                <Image className="ml-5" source={require('../assets/images/password.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="******"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                >
                </TextInput>
            </View>
            <View className="flex-row p-1 gap-3 bg-white items-center rounded-full shadow-black shadow-xl border border-green-500">
                <Image className="ml-5" source={require('../assets/images/mobile.png')}></Image>
                <TextInput className="w-[70%]"
                placeholder="Mobile"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                >
                </TextInput>
            </View>
        </View>
        {/* Error message display */}
        {error ? <Text className="text-center text-red-500 mt-3.5">{error}</Text> : null}

        <Text className="text-right text-[#847f7f] pr-4 mt-5">Forgot your password?</Text>
        <View>
            <View className="flex-row items-center justify-end mt-10 gap-4">
                <Text className="text-3xl font-bold">Create</Text>
                <TouchableOpacity onPress={sendData}>
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

