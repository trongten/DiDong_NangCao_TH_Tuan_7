import { useEffect, useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { s } from "react-native-wind";
import FetchInputToDo from './fetchInputToDo';
import FetchFlatListToDo from './fetFlatListToDo';
export default function FetchToDo() {

    useEffect(() => {
        fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/book')
        .then(data=>data.json())
        .then(data =>setList(data))
    },[])
      const [list, setList] = useState([])
    
    

    return (

        <SafeAreaView style={s`items-center justify-center`}>
            
            <FetchInputToDo list={list} setList={setList}/>

            <FetchFlatListToDo setList={setList} list={list}/>          
          
        </SafeAreaView>
    )



}