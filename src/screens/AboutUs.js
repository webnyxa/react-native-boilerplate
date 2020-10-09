import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground
} from 'react-native';
 import {Header} from "../components"

class AboutUs extends Component { 
  constructor(props){
    super(props)
  }
  render(){
     const {navigate} = this.props.navigation
      return(
          <SafeAreaView style = {{flex:1}}>
          <ImageBackground
          style={{ flex: 1}}
          source={require('../assets/backgroundImg.png')}>
              <Header
                  onPress = {()=>this.props.navigation.openDrawer()}
                  onPress1 = {()=> navigate("EditProfile")}
                  headerTxt = "ABOUT US"
                  iconName = "navicon"
                  iconType = "EvilIcons"
                  rightIcon = {true}
                 
                />
              <ScrollView>
              <Text style = {{marginHorizontal:16,textAlign:'justify',marginTop:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  {"\n"}{"\n"}    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
              </ScrollView>  
              </ImageBackground>  
          </SafeAreaView>
      )
  }

}
const styles = StyleSheet.create({ 
 
})

export default AboutUs;
