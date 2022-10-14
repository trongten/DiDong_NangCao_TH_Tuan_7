import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlatListBook from './FlatListBook';
import InputList from './Input';

export default function ListBook() {
    return (
        <SafeAreaView>
            <InputList/>
            <FlatListBook/>
        </SafeAreaView>
    )
}