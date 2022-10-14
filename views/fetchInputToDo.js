
import { useState } from 'react';
import { ListViewBase, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";

export default function FetchInputToDo({list,setList}){
    const [image,setImage] = useState()
    const [text, setText] = useState("");
    return(
    <View style={s`flex-row justify-center items-center`}>
                <TextInput
                onChangeText={setText}
                value={text}
                style={s`border-black rounded-2xl border-solid border h-10 w-28 text-xl m-5`} />

                <TextInput
                onChangeText={setImage}
                value={image}
                style={s`border-black rounded-2xl border-solid border h-10 w-24 text-xl`}
               />
             

                <TouchableOpacity style={s`m-5 bg-fuchsia-400 w-20 h-10 rounded-2xl items-center justify-center`}
                onPress={() => { fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/book', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ten: text, anh : image})
                }).then(()=>({ten: text, anh : image}))
                .then((data) => {
                    setList([...list,data])
                    console.log(data);
                    }
                )
                
                }}
                ><Text style={s`font-black text-white`}>Add</Text></TouchableOpacity>
            </View>
)}