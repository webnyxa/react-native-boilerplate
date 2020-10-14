<img src="https://user-images.githubusercontent.com/72626578/95946155-94ddf200-0e09-11eb-8c4e-1591c8cc2727.jpg" >  

[![release](https://img.shields.io/badge/release-october-green.svg)]()
[![platform](https://img.shields.io/badge/platform-android/ios-blue.svg)](https://reactnative.dev/docs/getting-started)
[![react native version](https://img.shields.io/badge/react%20native%20version-v0.63.2-green.svg)](https://reactnative.dev/docs/getting-started)
[![navigation version](https://img.shields.io/badge/navigation%20version-5-green.svg)](https://reactnavigation.org/)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

                                                                                                                                                                     
## react-native-boilerplate
This component for both Android and iOS
Make sure android studio and emulator must me installed in your pc and all the path variables must be set properly.
To check your Login Data please follow this link : http://react-demo.webnyxa.com  userName -  ```admin@demoserver.in ```    and  Password - ```123456 ``` 

### Preview 
<img src="https://user-images.githubusercontent.com/72626578/95977301-56126100-0e36-11eb-8d11-77c455694bab.gif" width="210" height="370" >

### Content
This Repository contains:
- React Native (v0.63.2) application (in "ejected" mode to allow using dependencies that rely on native code)
- clear directory layout to provide a base architecture for your application
- Redux (v4.0.5) to help manage state
- Redux Persist (v6.0.0) to persist the Redux state
- axios to make API calls (v0.20.0)
- vector icon (v7.1.0)
- Image Picker (v2.3.4)
- pincode-input (1.0.9)
- simple toast (1.1.2)

### Project structure

<pre>
<span class="pl-s1">src</span>
 <span class="pl-s1">├──</span> <span class="pl-s1">assets</span><span class="pl-kos">
 <span class="pl-s1">│</span>
 <span class="pl-s1">├──</span><span class="pl-s2">components</span><span class="pl-kos">
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">CustomButton</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">TextInutComponent</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">CustomDrawerContent</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">Header</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">IconNB</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">ProgressDialog</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│ </span>      <span class="pl-s1">├──</span> <span class="pl-v">IconNB</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│ </span>      <span class="pl-s1">└──</span> <span class="pl-v">index</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>
 <span class="pl-s1">├──</span><span class="pl-s1">screens</span><span class="pl-kos">
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">AboutUs</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">ChangePassword</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">DashboardScreen</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">EditProfile</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">ForgetPassword</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">Login</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">RegistrationScreen</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">├──</span> <span class="pl-v">ResetPassword</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>       <span class="pl-s1">└───</span> <span class="pl-v">VerifyOtpScreen</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>
 <span class="pl-s1">├──</span><span class="pl-s1">service</span><span class="pl-kos">
 <span class="pl-s1">│</span>     <span class="pl-s1">└───</span> <span class="pl-v">index</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>
 <span class="pl-s1">├──</span><span class="pl-s1">store</span><span class="pl-kos">
 <span class="pl-s1">│</span>     <span class="pl-s1">└───</span> <span class="pl-v">index</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>     <span class="pl-s1">└──</span> <span class="pl-v">action</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>         <span class="pl-s1">├──</span><span class="pl-v">actionTypes</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>         <span class="pl-s1">└──</span> <span class="pl-v">index</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 <span class="pl-s1">│</span>    <span class="pl-s1">└──</span> <span class="pl-v">reducers</span><span class="pl-kos">.</span><span class="pl-c1">js</span> 
           <span class="pl-s1">├──</span><span class="pl-v">index</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
           <span class="pl-s1">└──</span> <span class="pl-v">userReducer</span><span class="pl-kos">.</span><span class="pl-c1">js</span>
 </pre>

### Installation Android
- git clone https://github.com/webnyxa/react-native-boilerplate.git
- yarn install
- after installing,
- react-native run-android 

### Installation ios
- git clone https://github.com/webnyxa/react-native-boilerplate.git
- yarn install
- Go into the ios directory
- pod install
- react-native run-ios
