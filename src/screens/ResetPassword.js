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
import {
  TextInutComponent,
  Header,
  ButtonCustom,
  ProgressDialog,
} from '../components';
import Toast from 'react-native-simple-toast';
import service from '../service';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {oldPassword: '', newPassword: '', email: '', loading: false};
  }



  validation = () => {
    let {oldPassword,newPassword} = this.state;

    if (this.state.oldPassword == '') {
      Toast.show('Please Enter Old Password');
    } else if (this.state.newPassword == '') {
      Toast.show('Please Enter New Password');
    } else {
      this.setState({loading: true});
      let params = {
        email: this.props.user.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      };

      service
        .post('changePassword', params)
        .then((response) => {
          this.setState({loading: false});

          let data = response.data;
          if (data.status == 'success') {
            Toast.show(data.message, Toast.LONG);
            this.setState({oldPassword: '', newPassword: ''});
          } else {
            Toast.show(data.message, Toast.LONG);
          }
        })
        .catch((error) => {
          this.setState({loading: false});
          console.log(error);
        });
    }
  };

  render() {
    const {navigate} = this.props.navigation
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/backgroundImg.png')}>
          <Header
            onPress={() => this.props.navigation.openDrawer()}
            onPress1={() => navigate('EditProfile')}
            headerTxt="CHANGE PASSWORD"
            iconName="navicon"
            iconType="EvilIcons"
            rightIcon={true}
           
          />

          <ScrollView>
            <View style={styles.subContainer}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/logo.png')}
              />
              <TextInutComponent
                placeholder="Enter Old Password"
                secureTextEntry={true}
                value={this.state.oldPassword}
                onChangeText={(text) => this.setState({oldPassword: text})}
              />
              <TextInutComponent
                placeholder="Enter New Password"
                secureTextEntry={true}
                value={this.state.newPassword}
                onChangeText={(text) => this.setState({newPassword: text})}
              />
              <ButtonCustom
                style={{marginTop: 20}}
                onPress={() => this.validation()}
                btnTxt="CHANGE PASSWORD"
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

const mapStateToProps = (state) => ({user: state.user});
export default connect(mapStateToProps)(ResetPassword);