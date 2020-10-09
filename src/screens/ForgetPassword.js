import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {TextInutComponent, Header, ButtonCustom,ProgressDialog} from '../components';
import Toast from 'react-native-simple-toast';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import service from '../service';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',loading:false};
  }

  Validation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.state.email == '') {
      Toast.show('Please Enter Email Id');
    } else if (reg.test(this.state.email) === false) {
      Toast.show('Please Enter valid  Email Id');
    } else {
      this.setState({ loading: true })
     let params = {
      email:this.state.email
     }

      service
      .post('forgetPassword', params)
 
      .then((response) => {
        this.setState({ loading: false })
        
        let  data = response.data
        if(data.status == "success"){
          Toast.show(data.message,Toast.LONG);
          this.props.navigation.replace('VerifyOtpScreen',{emailID:this.state.email});
          this.setState({ email:''})
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
            headerTxt="VERIFY EMAIL"
            onPress={() => this.props.navigation.goBack(null)}
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
                placeholder="Enter Email Id"
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
              />

              <ButtonCustom
                style={{marginTop: 20}}
                onPress={() => this.Validation()}
                btnTxt="VERIFY EMAIL"
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

export default ForgetPassword;
