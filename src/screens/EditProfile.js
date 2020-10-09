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
  ActivityIndicator
} from 'react-native';
import {
  TextInutComponent,
  Header,
  ButtonCustom,
  ProgressDialog,
} from '../components';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import service from '../service';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {saveUserData} from '../store/action';
import ImgToBase64 from 'react-native-image-base64';

const imageUrl = 'http://react-demo.webnyxa.com/images/user/';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ProfileImage: '',
      loading: false,
      userId: '',
      email: '',
      SavePath: undefined,
      ImgLoading:false
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      ProfileImage: this.props.user.profile_path,
    });

    console.log('user####', this.props.user);

    if (
      this.props.user.profile_path !== 'null' &&
      this.props.user.profile_path !== null &&
      this.props.user.profile_path !== undefined
    ) {
      this.setState({ImgLoading: true});
      ImgToBase64.getBase64String(imageUrl + this.props.user.profile_path)
        .then((base64String) =>
          this.setState({
            SavePath: 'data:image/png;base64,' + base64String,
            ImgLoading: false,
          }),
        )
        .catch((err) =>
          this.setState({ImgLoading: false})
        );
    } else {
      this.setState({ImgLoading: true});
      ImgToBase64.getBase64String(imageUrl + '1602130657.png')
        .then((base64String) =>
          this.setState({
            SavePath: 'data:image/png;base64,' + base64String,
            ImgLoading: false,
          }),
        )
        .catch((err) =>  this.setState({loading: false}));
    }
  }

  validation = () => {
    let {name, ProfileImage, email} = this.state;
    if (name == '') {
      Toast.show('Please Enter Name');
    } else {
      this.setState({loading: true});

      let params = {
        name: name,
        profile_photo:
          ProfileImage.uri == undefined && ProfileImage.uri == null
            ? this.state.SavePath
            : ProfileImage.uri,
      };

      console.log('params', params);

      service
        .post('edit_user_profile/' + this.props.user.user_id, params)

        .then((response) => {
          this.setState({loading: false});

          let data = response.data;
          if (data.status == 'success') {
            let userData = {
              user_id: this.props.user.user_id,
              name: name,
              email: email,
              profile_path: data.data.profile_photo,
            };
            this.props.saveUserData(userData);
            this.props.navigation.goBack(null);

            Toast.show('Profile Updated Successfully', Toast.LONG);
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

  SelectImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: 'data:image/png;base64,' + response.data};
        this.setState({
          ProfileImage: source,
        });

        // AsyncStorage.setItem("@ImagePathStore",source.uri)
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{ flex: 1}}
          source={require('../assets/backgroundImg.png')}>
          <Header
            onPress={() => this.props.navigation.goBack(null)}
            rightIcon={true}
            headerTxt="EDIT PROFILE"
            iconName="keyboard-backspace"
            iconType="MaterialCommunityIcons"
          />

          <ScrollView>
            <View style={styles.subContainer}>
              <TouchableOpacity
                onPress={() => this.SelectImage()}
                style={{
                  width: 90,
                   height: 90,
                  borderRadius: 90 / 2,
                  borderWidth: 1,
                  borderColor: 'gray',
                  alignSelf: 'center',
                  marginBottom: 20,
                }}>
                  
                <Image
                  style={{...styles.imageView, position: 'absolute'}}
                  source={this.state.ProfileImage}
                />
                {this.state.ProfileImage !== '' &&
                this.state.ProfileImage !== 'null' ? (
                  <Image
                    style={styles.imageView}
                    source={{
                      uri: imageUrl + this.state.ProfileImage,
                    }}
                  />
                ) : (
                  <Image
                    style={styles.imageView}
                    source={require('../assets/usernew.png')}
                  />
                )}
                 { this.state.ImgLoading == true  && <ActivityIndicator loading = {false} style = {{marginTop:-55}} color="gray" size="large" /> }
              </TouchableOpacity>

              <TextInutComponent
                placeholder="Enter Name"
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
              />
              <TextInutComponent
                editable={false}
                placeholder="Enter Email Id"
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
              />
              <ButtonCustom 
                disabled= {this.state.ImgLoading == true ? true  :false}
                style={{marginTop: 20}}
                onPress={() => this.validation()}
                btnTxt="SAVE PROFILE"
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
  imageView: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = {saveUserData};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
