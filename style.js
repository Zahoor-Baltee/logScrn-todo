
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create ({
  // screen 1
  header:{
    height:300,
    
  },
  headerText:{
    fontSize:26,
    color:"White"
  },
  btns:{
    margin: 15,
    padding:12,
    backgroundColor:"#2591d9",
    borderRadius:40,
  },
  inp1:{
    border:"none",
   borderBottomColor:"#2591d9",
   borderBottomWidth:2,
    marginTop:10,
    marginHorizontal:20,
    color: "white",
    fontSize:16,
  },
  placeholder:{
    color:"white",
  },
  forgetText:{
    fontSize: 18,
    marginStart: 30,
    margin:15,
    color: 'white'
  },
  heading:{
    fontFamily:"Arial",
    color:"#2591d9",
    fontFamily:"ar",
    fontSize:36,
    marginTop:245,
     marginLeft:150
  },

  //screen2

  screen2Head:{
    marginHorizontal:100,
    marginTop:240,
    fontSize:36
  },
  mainBody:{
    
  },
  textInp:{
    border:"none",
   borderBottomColor:"#6b705c",
   borderBottomWidth:1,
    marginTop:10,
    marginHorizontal:40,
    color: "white",
    fontSize:16,
    
  },
  textPass:{
    fontSize: 18,
    marginStart: 30,
    margin:15,
    color: 'white'
  },
  Reg1:{
    fontSize: 18,
    textAlign: 'center',
    color: '#6b705c'
  },
  Reg2:{
    fontSize: 18,
    textAlign: 'center',
    color: '#2591d9'
  },
  screen2Btn:{
    marginTop:100,
    padding:22,
    backgroundColor:"#2591d9",
   
  },
  // screen 3
  Screen3header:{
    paddingTop:60,
    height:100,
  },
  Screen3heading:{
    textAlign:"center",
    fontSize:36
  },
  Screen3text:{
    textAlign:"center",
    fontSize:18
  },
  Screen3main:{
    height:612,
    // backgroundColor:"green"
  },
  Screen3inp1:{
    border:"none",
   borderColor:"#2591d9",
   borderWidth:2,
    marginTop:30,
    marginHorizontal:30,
    color: "white",
    fontSize:18,
    borderRadius:40,
    padding:12,
    textAlign:"center",

  },
  Screen3forgetText:{
    color:"white",
    textAlign:'center',
    fontSize:18, 
    marginTop:22,
    marginBottom:22
    
  },
  Screen3btns:{
    border:"none",
    borderWidth:1,
    borderColor:"#38b000",
    borderRadius:40,
    marginHorizontal:100,
    paddingVertical:8
  },

  // todo Screen

  todoHead:{
    textAlign:'center',
    fontSize:28,
    marginTop:20,
    color:"black"
  },
  todoFlex:{
    marginHorizontal:8, 
    flexDirection:"row",
    justifyContent:"space-between"
  },
  toDoinp:{ 
    paddingLeft:18,
    width:"80%",
    backgroundColor:"grey",
    border:"none",
   borderColor:"#00f5d4",
   borderWidth:2,
    marginTop:30,
    color: "white",
    fontSize:18,
    padding:12,
    color:"white",
    fontsize:16,
    borderRadius:50,

  },
  todoBtn:{
    marginTop:32,
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius:30,
    backgroundColor:"#00f5d4",
    fontSize:23,
    color:"black"

  },
  parentList:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  list:{
    paddingTop:10,
    width:"70%",
    marginTop:20,
    paddingLeft:15,
    justifyContent:"center",
    height:40,
    borderRadius:30,
    marginLeft:12,
    // marginRight:78,
    backgroundColor:"grey",
    borderColor:"#00f5d4",
  },
  listBtn:{
    marginTop:20,
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius:30,
    backgroundColor:"red",
    color:"black"
  },
  listBtnE:{
    marginTop:20,
    paddingVertical:12,
    paddingHorizontal:8,
    borderRadius:30,
    backgroundColor:"#00f5d4",
    color:"black"
  },

});

export { Styles}