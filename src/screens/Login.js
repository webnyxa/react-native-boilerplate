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
import {
  TextInutComponent,
  Header,
  ButtonCustom,
  ProgressDialog,
} from '../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import service from '../service';
import { connect } from "react-redux";
import {saveUserData} from '../store/action' 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', loading: false, token: ''};
  }

  componentDidMount() {
    if(this.props.user.user_id !== null && this.props.user.user_id !== undefined ){
      this.props.navigation.replace('Home');
    }
  }

  Validatation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email == '') {
      Toast.show('Please Enter Email Id');
    } else if (reg.test(this.state.email) === false) {
      Toast.show('Please Enter valid  Email Id');
    } else if (this.state.password == '') {
      Toast.show('Please Enter Password');
    } else {
      this.setState({loading: true});
      let {email, password} = this.state;

      let params = {
        email: email,
        password: password,
      };

      service
        .post('login', params)

        .then((response) => {
          this.setState({loading: false});

          let data = response.data;
          if (data.status == 'success') {
            this.props.saveUserData(data.data);
            Toast.show(data.message, Toast.LONG);
            this.setState({email: '', password: ''});
            this.props.navigation.replace('Home');

          } else {
            Toast.show('Please Enter Correct credentials', Toast.LONG);
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
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/backgroundImg.png')}>
          <Header headerTxt="LOGIN" />
          <ScrollView>
            <View style={styles.subContainer}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/logo.png')}
              />

              <TextInutComponent
                placeholder="Enter Email Id"
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={(text) => this.setState({email: text})}
              />
              <TextInutComponent
                placeholder="Enter Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    alignSelf: 'center',
                    color: '#A0A0A0',
                    marginTop: 5,
                  }}>
                  Don't have an account ?
                </Text>
                <Text
                  onPress={() =>
                    this.props.navigation.navigate('RegistrationScreen')
                  }
                  style={styles.forgetPassTxt}>
                  Sign Up
                </Text>
              </View>
              <Text
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
                style={{
                  ...styles.forgetPassTxt,
                  marginHorizontal: 20,
                }}>
                Forgot Your Password?
              </Text>

              <ButtonCustom
                style={{marginTop: 20}}
                onPress={() => this.Validatation()}
                btnTxt="LOGIN"
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
  forgetPassTxt: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#A0A0A0',
    fontSize: 15,
    textAlign: 'right',
    color: '#A0A0A0',
    padding: 3,
  },
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


const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = {saveUserData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);