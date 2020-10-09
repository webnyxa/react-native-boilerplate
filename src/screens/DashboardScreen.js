import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {Header} from '../components';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {ProfileImage: ''};
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => this.props.navigation.openDrawer()}
          onPress1={() => navigate('EditProfile')}
          headerTxt="DASHBOARD"
          iconName="navicon"
          iconType="EvilIcons"
          rightIcon={true}
        
        />
       
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});

export default DashboardScreen;
