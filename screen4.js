import React, { useState } from 'react';
import {TextInput, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from './style';

function MyToDos() {
    const [data,setData]=useState('')
    const [indata,SetIndata]=useState(()=>{return[]})
 const AddData=()=>{
  const newtext = { id: new Date().getTime().toString(), name: data };
    SetIndata([...indata,newtext])
    console.log(data);
    setData("")
 }
 const DeletList=(ind)=>{
  // alert("nbn b")
  const deleteData = indata.filter((e)=>{
    return SetIndata(e.id) ==""
  })
  SetIndata(deleteData)
 }
  return (
    <>
      <View style={{ backgroundColor:"#dad7cd",  width :"100%" ,height:"100%"}}>
        <View>
          <Text style={Styles.todoHead}>ToDos</Text>
        </View>
        <View style={Styles.todoFlex}>
          
            <TextInput
              style={Styles.toDoinp}
              placeholder="What do you have Planned?"
              placeholderTextColor="white" 
              onChangeText={e => setData(e)}
              value={data}
            />
          
          
            <TouchableOpacity >
              <Text onPress={AddData} style={Styles.todoBtn}>Add</Text>
            </TouchableOpacity>
          
        </View>
        
            {/* <Text>{indata}</Text> */}
            {/* {indata.map((e,i)=>{
                return <View key={i}>
                     <Text  > {e}</Text>
                </View>  
            })
          }  */}
                  
        
        <FlatList data={indata} renderItem={(e)=>{
            return<View style={Styles.parentList}> 
              <Text style={Styles.list}  key={e.id}>{e.item.name}</Text>
              <TouchableOpacity>
                <Text style={Styles.listBtnE}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>DeletList(e.id)}>
                <Text style={Styles.listBtn}>DEL</Text>
              </TouchableOpacity>
            </View>
        }}
        />
      </View>
    </>
  );
}

export default MyToDos;


