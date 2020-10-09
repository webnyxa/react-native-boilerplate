import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


export default class ButtonCustom extends React.Component{


    render(){
        
        return <TouchableOpacity activeOpacity = {0.8} onPress={this.props.onPress}
        style={[{
          width: '95%',
          alignSelf: 'center',
         
          backgroundColor:"#E75480"
         
        }, {...this.props.style}]}>
        <Text
          style={{
            alignSelf: 'center',
            padding: 12,
            fontSize: 14,
            fontWeight:'bold',
            color :'white'
          
          }}>
        {this.props.btnTxt}
        </Text>
      </TouchableOpacity>

    }
}
