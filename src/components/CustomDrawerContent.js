
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { clear } from "../store/action";
import {connect} from 'react-redux';


class CustomDrawerContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Home','About Us', 'Reset Password', 'Logout'],
    };
  }

  LogoutApp=()=>{
    this.props.clear();
    this.props.navigation.replace("Login");
  }

  itemSelected = (item) => {
    if (item == 'Logout') {
      Alert.alert(
        'Are you sure you want to logout ? ',
        'Press Yes to logout ',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => this.LogoutApp() },
        ],
        { cancelable: false },
      );
    } else {
      this.props.navigation.navigate(item);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{}}>
          <Image
            style={{alignSelf: 'center', marginVertical: 20}}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <View style={{backgroundColor: '#E75480', height: 0.5}} />
          {this.state.data.map((item, index) => {
            return (
              <View key={index}>
                <Text
                  
                  onPress={() => this.itemSelected(item)}
                  style={styles.txt}>
                  {item}
                </Text>
                <View style={{backgroundColor: '#E75480', height: 0.5}} />
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  txt: {marginHorizontal: 20, padding: 12, fontWeight: 'bold',color:'red',fontSize:15},
});

const mapStateToProps = (state) => ({ user: state.user});
const mapDispatchToProps = { clear };
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent);


