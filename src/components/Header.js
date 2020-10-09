import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  StatusBar,
} from 'react-native';
import {Icon} from '../components';
import {connect} from 'react-redux';


class Header extends Component {

  render() {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 46,
          alignItems: 'center',
          backgroundColor:'pink'
        }}
        activeOpacity={0.8}>
        <StatusBar backgroundColor="#E75480" />
        <TouchableOpacity
          style={{marginStart: 10}}
          onPress={this.props.onPress}>
          <Icon
            name={this.props.iconName}
            type={this.props.iconType}
            size={28}
            style ={{color:'black'}}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 5,
            color:'black'
          }}>
          {this.props.headerTxt}
        </Text>
        <TouchableOpacity style={{marginEnd: 10}} onPress={this.props.onPress1}>
          {this.props.rightIcon == true && this.props.user.profile_path !== null  ?  
           this.props.user.profile_path !== 'null' ?  <Image
                style={styles.image}
                source={{
                  uri:
                    'http://react-demo.webnyxa.com/images/user/' +
                    this.props.user.profile_path,
                }}
              /> : 
              <Image
              style={styles.image}
              source={require('../assets/usernew.png')}
            /> : null
  }      
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {width: 48, height: 48, borderRadius: 48 / 2},
});

const mapStateToProps = (state) => ({user: state.user});
export default connect(mapStateToProps)(Header);

