import React from 'react';
import {Styles} from './style';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
function MyScreen3() {
  return (
    <>
      <View style={{height: 750, backgroundColor: 'black'}}>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3heading}>LogIn</Text>
        </View>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3text}>
            Please Enter Your Login And Password
          </Text>
        </View>
        <View style={Styles.Screen3main}>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Email"
              placeholderTextColor="#adb5bd"
            />
          </View>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Password"
              placeholderTextColor="#adb5bd"></TextInput>
          </View>
          <View>
            <Text style={Styles.Screen3forgetText}>Forget Password?</Text>
          </View>
          <View>
            <TouchableOpacity style={Styles.Screen3btns}>
              <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
          </View>
        </View>
      </View>
    </>
  );
}

export default MyScreen3;
