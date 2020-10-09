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
import {
  TextInutComponent,
  Header,
  ButtonCustom,
  ProgressDialog
} from '../components';
import Toast from 'react-native-simple-toast';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import service from '../service';

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: '', loading: false};
  }

  Validation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.name == '') {
      Toast.show('Please Enter Name');
    } else if (this.state.email == '') {
      Toast.show('Please Enter Email Id');
    } else if (reg.test(this.state.email) === false) {
      Toast.show('Please Enter valid Email Id');
    } else if (this.state.password == '') {
      Toast.show('Please Enter Password');
    } else {
      this.setState({loading: true});
      let {name, email, password} = this.state;

      let params = {
        name: name,
        email: email,
        password: password,
        c_password: password,
      };

      service
        .post('register', params)

        .then((response) => {
          this.setState({loading: false});

          let data = response.data;
          if (data.status == 'success') {
            Toast.show(data.message, Toast.LONG);
            this.setState({name: '', email: '', password: '', c_password: ''});
            this.props.navigation.navigate('Login');
          }
        })
        .catch((error) => {
          this.setState({loading: false});
          console.log(error)
         // Toast.show(error.data.errors.email[0], Toast.LONG);
        });
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/backgroundImg.png')} >
          <Header
            onPress={() => this.props.navigation.goBack(null)}
            headerTxt="REGISTER"
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
                placeholder="Enter Name"
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
              />
              <TextInutComponent
                placeholder="Enter Email Id"
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
              />
              <TextInutComponent
                placeholder="Enter Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
              />

              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.forgetPassTxt}>
                Already have a Account ?
              </Text>

              <ButtonCustom
                style={{marginTop: 20}}
                onPress={() => this.Validation()}
                btnTxt="REGISTER"
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
    marginEnd: 20,
    marginTop: 5,
    // letterSpacing: 0.5,
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

export default RegistrationScreen;
