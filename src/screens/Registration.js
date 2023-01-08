// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     ScrollView,
//     TouchableOpacity,
//     StyleSheet,
//     StatusBar,
//     Alert,
//     Pressable,
// } from 'react-native';
// import { TextInput, Headline, Subheading, Divider } from 'react-native-paper';
// import { Card } from 'react-native-shadow-cards';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import moment from 'moment';
// // import axios from 'axios';
// // import commonFunctions from '../frameWork/Components/commonFunctions';
// import { successToast } from '../components/RNFunctions';
// import { useTogglePasswordVisibility } from '../components/useTogglePasswordVisibility';
// import AppFunctions from '../../AppFunctions';
// // import { Icon } from 'react-native-elements';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Registration = ({ navigation }) => {
//     var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
//     // console.log("Date=>",date)

//     // var date = new Date().toLocateString('en-IN')
//     // console.log("time =>",date)

//     // commonFunctions.successToast("Success", resdata.data.Message)
//     // AppFunctions.errorToast("Error", resdata.data.Message)

//     const [name, setname] = useState('');
//     const [username, setusername] = useState('');
//     const [MobileNumber, setMobileNumber] = useState('');
//     const [Email, setEmail] = useState('');
//     const [Address, setAddress] = useState('');
//     const [Password, setPassword] = useState('');
//     const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

//     // async function setNewRegistration() {
//     //     try {
//     //         // console.log('Hello');
//     //         var resdata = await axios.post(
//     //             'https://dev.sutradhar.tech/libraryServices/api/v1/entity/',
//     //             {
//     //                 guid: date,
//     //                 descn: name,
//     //                 mobile: MobileNumber,
//     //                 idlogin: username,
//     //                 email: Email,
//     //                 pwd: Password,
//     //                 address: Address,
//     //                 active: true,
//     //             },
//     //         );
//     //         console.log('resdata is ', resdata.data);
//     //         if (
//     //             name == '' ||
//     //             MobileNumber == '' ||
//     //             username == '' ||
//     //             Email == '' ||
//     //             Password == '' ||
//     //             Address == ''
//     //         ) {
//     //             AppFunctions.errorToast('Error', 'Please Enter All the Values.');
//     //         } else {
//     //             // Do something here which you want to if all the Text Input is filled.
//     //             // Alert.alert("All Text Input is Filled.");
//     //             if (resdata.data.Success == true) {
//     //                 successToast('Successful', resdata.data.Message);
//     //                 navigation.goBack();
//     //             } else {
//     //                 AppFunctions.errorToast('Error', resdata.data.Message);
//     //             }
//     //         }

//     //         console.log('Message', resdata.Message);
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // }
//     // function SaveRegistration() {
//     //     console.log('Book Add Function Called');
//     //     setNewRegistration();
//     // }

//     return (
//         <View style={styles.main}>
//             <StatusBar
//                 animated={true}
//                 backgroundColor="dodgerblue"
//                 barStyle={'light-content'}
//                 showHideTransition={'slide'}
//             />

//             <View style={styles.head}>
//                 <Text
//                     style={{
//                         fontSize: 35,
//                         color: 'white',
//                         marginBottom: '3%',
//                         fontFamily: 'Montserrat-Medium',
//                         textTransform: 'uppercase',
//                     }}>
//                     Sign up
//                 </Text>
//             </View>

//             <Card style={styles.card}>
//                 <View>
//                     <Text
//                         style={{
//                             fontSize: 17,
//                             textAlign: 'left',
//                             color: 'dodgerblue',
//                             fontFamily: 'Montserrat-Medium',
//                             textAlign: 'center',
//                         }}>
//                         Create A New Account
//                     </Text>
//                 </View>
//                 <ScrollView>
//                     <View style={styles.textInput_view}>

//                         <TextInput
//                             style={styles.Inputtext}
//                             mode="flat"
//                             placeholder="Full Name"
//                             value={name}
//                             textContentType={'name'}
//                             onChangeText={text => setname(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             right={<TextInput.Icon name="account" color="dodgerblue" />}
//                         />

//                     </View>
//                     <View style={styles.textInput_view}>

//                         <TextInput
//                             style={styles.Inputtext}
//                             mode="flat"
//                             placeholder="Username"
//                             value={username}
//                             textContentType={'nickname'}
//                             onChangeText={text => setusername(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             right={<TextInput.Icon name="account" color="dodgerblue" />}
//                         />

//                     </View>
//                     <View style={styles.textInput_view}>

//                         <TextInput
//                             mode="flat"
//                             style={styles.Inputtext}
//                             placeholder="Mobile Number"
//                             value={MobileNumber}
//                             maxLength={10}
//                             keyboardType="number-pad"
//                             textContentType={'telephoneNumber'}
//                             onChangeText={text => setMobileNumber(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             right={<TextInput.Icon name="phone" color="dodgerblue" />}
//                         />

//                     </View>

//                     <View style={styles.textInput_view}>

//                         <TextInput
//                             mode="flat"
//                             style={styles.Inputtext}
//                             placeholder="Email Id"
//                             value={Email}
//                             keyboardType="email-address"
//                             onChangeText={text => setEmail(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             right={<TextInput.Icon name="email" color="dodgerblue" />}
//                         />

//                     </View>
//                     <View style={styles.textInput_view}>

//                         <TextInput
//                             mode="flat"
//                             style={styles.Inputtext}
//                             placeholder="Full Addreass"
//                             value={Address}
//                             multiline={true}
//                             onChangeText={text => setAddress(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             right={<TextInput.Icon name="pen" color="dodgerblue" />}
//                         />

//                     </View>

//                     {/* <View style={styles.textInput_view}>
//                         <TextInput
//                             mode="flat"
//                             style={styles.Inputtext}
//                             placeholder="Password"
//                             secureTextEntry
//                             value={Password}
//                             onChangeText={text => setPassword(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                             // right={<TextInput.Icon name="lock" color="dodgerblue" onPress={handlePasswordVisibility} />}
//                         />
//                     </View> */}

//                     <View style={[styles.textInput_view, {
//                         width: '100%',
//                         height: 44,
//                         // backgroundColor: '#f1f3f6',
//                         borderRadius: 8,
//                         paddingHorizontal: 10,
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                     }]}>
//                         {/* <Icon color='dodgerblue' name='lock' type='font-awesome' size={20} /> */}
//                         {/* <TextInput
//                             // style={styles.Inputtext}
//                             style={{ flex: 1, paddingHorizontal: 12 }}
//                             secureTextEntry={passwordVisibility}
//                             placeholder={"Password"}
//                             textContentType='password!'
//                             placeholderTextColor={'gray'}
//                             onChangeText={text => setPassword(text)}
//                         /> */}

//                         <TextInput
//                             style={[styles.Inputtext, { flex: 1, paddingHorizontal: 12 }]}

//                             secureTextEntry={passwordVisibility}
//                             placeholder={"Password"}
//                             textContentType='password!'
//                             placeholderTextColor={'gray'}
//                             onChangeText={text => setPassword(text)}
//                             theme={{
//                                 colors: {
//                                     primary: 'dodgerblue', // Outline color here
//                                 },
//                             }}
//                         />
//                         <Pressable
//                         //  onPress={handlePasswordVisibility}
//                         >
//                             <MaterialCommunityIcons name={rightIcon} size={25} color='dodgerblue' />
//                         </Pressable>
//                     </View>

//                     <View style={styles.button_view}>
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress={() => {
//                                 // SaveRegistration();
//                                 navigation.navigate('Login')
//                             }}>
//                             <Text
//                                 style={{
//                                     fontSize: 20,
//                                     color: 'white',
//                                     fontWeight: 'normal',
//                                     fontFamily: 'Montserrat-Medium',
//                                 }}>
//                                 Sign up
//                             </Text>
//                             <AntDesign
//                                 name={'login'}
//                                 size={22}
//                                 color={'white'}
//                                 style={{ marginLeft: 30 }}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <View style={{ flex: 1, height: 1, backgroundColor: 'dodgerblue' }} />
//                         <View>
//                             <Text
//                                 style={{
//                                     width: 50,
//                                     textAlign: 'center',
//                                     color: 'gray',
//                                     fontFamily: 'Montserrat-Medium',
//                                 }}>
//                                 OR
//                             </Text>
//                         </View>
//                         <View style={{ flex: 1, height: 1, backgroundColor: 'dodgerblue' }} />
//                     </View>

//                     {/* <Divider style={{borderColor:'red',borderWidth:1}} /> */}
//                     <View
//                         style={{
//                             marginVertical: 30,
//                             alignItems: 'center',
//                             flexDirection: 'row',
//                         }}>
//                         {/* <TouchableOpacity style={{backgroundColor:'dodgerblue',width:100,height:45,justifyContent:'center',borderRadius:20}}> */}
//                         <View style={{ flex: 0.8 }}>
//                             <Text
//                                 style={{
//                                     fontSize: 14,
//                                     color: 'grey',
//                                     textAlign: 'right',
//                                     fontFamily: 'Montserrat-Medium',
//                                 }}>
//                                 Already Have an account?
//                             </Text>
//                         </View>
//                         <View style={{ flex: 0.3 }}>
//                             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                                 <Text
//                                     style={{
//                                         fontSize: 16,
//                                         color: 'dodgerblue',
//                                         marginLeft: 10,
//                                         fontFamily: 'Montserrat-Medium',
//                                     }}>
//                                     Log in
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </Card>
//         </View>
//     );
// };

// export default Registration;

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: 'ghostwhite',
//     },
//     head: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 0.2,
//         backgroundColor: 'dodgerblue',
//         borderBottomLeftRadius: 100,
//         borderBottomRightRadius: 100,
//     },
//     card: {
//         backgroundColor: 'white',
//         flex: 0.8,
//         borderRadius: 10,
//         padding: 10,
//         marginTop: '-5%',
//         marginBottom: '4%',
//         marginHorizontal: '4%',
//         width: '92%',
//         shadowColor: 'dodgerblue',
//     },
//     textInput_view: {
//         marginTop: '10%',
//     },
//     inputView: {
//         width: '100%',
//         height: 44,
//         backgroundColor: '#f1f3f6',
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     Inputtext: {
//         height: 40,
//         backgroundColor: 'white',
//     },
//     button_view: {
//         marginVertical: 35,
//         alignItems: 'center',
//     },
//     button: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginHorizontal: 40,
//         backgroundColor: 'dodgerblue',
//         height: 45,
//         width: 250,
//         borderRadius: 5,
//         flexDirection: 'row',
//     },
// });
