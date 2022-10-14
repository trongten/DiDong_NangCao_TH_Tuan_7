import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FlatListBook() {
    return (
        <View>
             <FlatList
            data={list}
            renderItem={({item}) => 
                <View>
                    <Text>{item.todo}</Text>
                    <TouchableOpacity
                    onPress={() => {setList(list.filter( ite => ite!==item ));}}
                    ><Text>Delete</Text></TouchableOpacity>
                </View>}           
            />
        </View>
    )
}