import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";

export default class RideScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}>Ride Screen</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red"
  },
  text:{
    color:"#ffff",
    fontSize:30
  }
})