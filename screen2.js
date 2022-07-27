import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Styles} from './style';
import bg from './images/bg2.jpeg';
function MyScreen2() {
  return (
    <>
    <View style={{backgroundColor:"#eae1df", height:800}}>
      <ImageBackground style={{height: 300}} source={bg}>
        <View >
          <Text style={Styles.screen2Head}>LogIn</Text>
        </View>
      </ImageBackground>
      <View style={{flexDirection: 'column'}}>
        <View style={Styles.mainBody}>
          <View style={Styles.textInp}>
            <TextInput placeholder="Enter Name" placeholderTextColor='#6b705c'></TextInput>
          </View>
          <View style={Styles.textInp}>
            <TextInput placeholder="Enter Email" placeholderTextColor='#6b705c'></TextInput>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={Styles.Reg1}>
              Not Register?<Text style={Styles.Reg2}>SignUp</Text>
            </Text>
          </View>
          <TouchableOpacity style={Styles.screen2Btn}>
            <Text style={{textAlign: 'center', fontSize: 18}}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </>
  );
}

export default MyScreen2;
