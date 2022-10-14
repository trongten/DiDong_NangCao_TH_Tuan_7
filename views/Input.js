import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function InputList() {
    const [sach,setSach] = useStates("");
    const [tacgia,setTacgia] = useStates("");
    return (
       <View>
            <TextInput
            onChangeText={setSach}
            value={sach}
            ></TextInput>

             <TextInput
            onChangeText={setTacgia}
            value={tacgia}
            ></TextInput>

            <TouchableOpacity
            onPress={() =>{}}
            ></TouchableOpacity>
       </View>
    )
}