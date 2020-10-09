import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './src/components';
import {
  DashboardScreen,
  EditProfile,
  Login,
  RegistrationScreen,
  ForgetPassword,
  VerifyOtpScreen,
  ChangePassword,
  AboutUs,
  ResetPassword
} from './src';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

const Stack = createStackNavigator();

class App extends React.Component {
  DrawerTabView = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: '#ebf3fd',
          inactiveTintColor: 'black',
          activeTintColor: 'black',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={DashboardScreen} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Reset Password" component={ResetPassword} />
      </Drawer.Navigator>
    );
  };

  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={this.DrawerTabView}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EditProfile"
            component={EditProfile}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ForgetPassword"
            component={ForgetPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="VerifyOtpScreen"
            component={VerifyOtpScreen} 
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ChangePassword"
            component={ChangePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
