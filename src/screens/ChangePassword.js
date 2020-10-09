import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {TextInutComponent, Header, ButtonCustom,ProgressDialog} from '../components';
import Toast from 'react-native-simple-toast';
import service from '../service';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '', cPassword: '',email:props.route.params.email,  otp:props.route.params.otp,loading:false};
  }

  validation = () => {
    if (this.state.password == '') {
      Toast.show('Please Enter Password');
    } else if (this.state.cPassword == '') {
      Toast.show('Please Enter Confirm Password');
    } else if (this.state.password !== this.state.cPassword) {
      Toast.show('Password and Confirm-Password does not match');
    } else {
      this.setState({ loading: true })
      let params = {
        email:this.state.email,
        password:this.state.cPassword,
        otp:this.state.otp
       }
  
        service
        .post('resetPasswordNew', params)
   
        .then((response) => {
          this.setState({ loading: false })
          
          let  data = response.data
          if(data.status == "success"){
            Toast.show(data.message,Toast.LONG);
            this.props.navigation.navigate('Login');
            this.setState({ password:'' ,cPassword:'' })
          }else{
           Toast.show(data.message);
          }
          
   
        })
        .catch((error)=> {
          this.setState({ loading: false })
          console.log(error)      
        });
      }
       


      
    
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{ flex: 1}}
          source={require('../assets/backgroundImg.png')}>
          <Header
            headerTxt="RESET PASSWORD"
            onPress={() => this.props.navigation.replace('Login')}
            iconName="keyboard-backspace"
            iconType="MaterialCommunityIcons"
          />
          

          <ScrollView>
            <View style={styles.subContainer}>
            <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/logo.png')}
              />
              <TextInutComponent
                placeholder="Enter Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
              />
              <TextInutComponent
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
                value={this.state.cPassword}
                onChangeText={(text) => this.setState({cPassword: text})}
              />
               <ButtonCustom
              style={{marginTop: 20}}
              onPress={() => this.validation()}
              btnTxt="RESET PASSWORD"
            />
            </View>

           
          </ScrollView>
        </ImageBackground>
        <ProgressDialog loading={this.state.loading} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: hp('18%'),
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 14,
    shadowColor: '#000000',
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});

export default ChangePassword;
