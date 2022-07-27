import React from 'react';
import {Styles} from './style';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import bgImg from"./images/bg1.jpeg";
// import logo1 from './images/logoz.png';
const MyScreen1 = () => {
  return (
    <>
      <View style={{ height:750,backgroundColor:"#343a40"}} >
          <View style={Styles.header}>
            <Text style={Styles.heading}>LogIn</Text>
          </View>
        <View style={Styles.main}>
          <View>
            <TextInput style={Styles.inp1} placeholder="Enter Email" placeholderTextColor="#adb5bd"/>
          </View>
          <View>
            <TextInput style={Styles.inp1} placeholder="Enter Password" placeholderTextColor="#adb5bd"></TextInput>
          </View>
        <View>
          <Text style={Styles.forgetText}>
            Forget Password?
          </Text>
        </View>
        <View>
          <TouchableOpacity style={Styles.btns}>
            <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
              LogIn
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop:15}}>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
            Not Register? 
            <Text style={{fontSize: 18, textAlign: 'center', color: '#2591d9'}}>
              SignUp
            </Text>
          </Text>
        </View>
        </View>
      </View>
    </>
  );
};

export default MyScreen1;
