import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Header, ButtonCustom,ProgressDialog} from '../components';
import service from '../service';
import Toast from 'react-native-simple-toast';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

class VerifyOtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      emailid:props.route.params.emailID,
      loading: false
    };
  }

  validations = () => {
    if (this.state.code == '') {
      Toast.show('Please Enter OTP');
    } else {
      this.setState({ loading: true })
      let params = {
        email: this.state.emailid,
        otp:this.state.code
      };

      console.log("params",params);

      service
        .post('verifyOtp', params)

        .then((response) => {
          this.setState({loading: false});

          let data = response.data;
          if (data.status == 'success') {
            Toast.show(data.message, Toast.LONG);
            this.props.navigation.replace('ChangePassword',{email:this.state.emailid,otp:this.state.code})
            this.setState({code: ''});
          } else {
            Toast.show(data.message);
          }
        })
        .catch((error) => {
          this.setState({loading: false});
          console.log(error);
        });
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/backgroundImg.png')}>
          <Header
            onPress={() => this.props.navigation.goBack(null)}
            headerTxt="VERIFY OTP"
            iconName="keyboard-backspace"
            iconType="MaterialCommunityIcons"
          />

          <ScrollView>
            <View style={styles.subContainer}>
            <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/logo.png')}
              />
              <SmoothPinCodeInput
                containerStyle={{alignSelf: 'center', marginVertical: 10}}
                value={this.state.code}
                onTextChange={(text) => this.setState({code: text})}
                cellSize={36}
                codeLength={4}
                cellStyle={{
                  borderBottomWidth: 0.7,
                  borderWidth: 0.5,
                  borderColor: 'black',
                  //fontSize: 14
                }}
                cellSize={30}
                cellStyleFocused={{
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                textStyle={{fontSize: 15, color: 'black'}}
                cellSpacing={20}
              />

              <ButtonCustom
                style={{marginVertical: 30}}
                onPress={() =>   this.validations() }
                btnTxt="VERIFY OTP"
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

export default VerifyOtpScreen;
