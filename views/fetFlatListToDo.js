
import { FlatList,Text,  TouchableOpacity, View, Image } from 'react-native';
import { s } from "react-native-wind";

export default function FetchFlatListToDo({list,setList}){
    return (
        <FlatList
            style={s`w-80 `}
            data={list}
            renderItem={({item}) => 
               
                <View style={s`justify-around flex-row items-center h-28 border-b border-t border-solid border-gray-100`}>
                     <Image style={s`w-20 h-20`} source={{uri:item.anh}}></Image>          
                    <Text style={s`font-medium`}>{item.ten}</Text>
                    <TouchableOpacity
                    onPress={() => {

                        fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/book/'+item.id, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                        
                }).then(()=>item)
                .then(item=>{
                    setList(list.filter( ite => ite!==item ));
                    console.log(list);
                })

                    }}
                    style={s`bg-fuchsia-400 w-14 h-8 rounded-xl justify-center items-center`}><Text style={s`text-white`}>Delete</Text></TouchableOpacity>
                </View>}           
            />
    )
}