import React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    RefreshControl,
    View,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    Text
} from 'react-native';

import { Divider, Provider, Avatar, ActivityIndicator } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';
import { Icon } from '@rneui/themed';

// import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
// import { useAuth } from '../frameWork/Auth/Auth';
// import AppConstants from '../AppConstants';
import { infoToast } from '../components/RNFunctions';
import AppFunctions from '../../AppFunctions';


// import MyMenu from './entities/MyMenu';

// import { Button, Actionsheet, useDisclose, Text, Box, Center, NativeBaseProvider } from "native-base";



const BooksDetails = ({ item, route, }) => {

    // const { state: { userdata: UserDetails } } = useAuth();
    const navigation = useNavigation();
    const [BookData, setBookData] = useState([1, 2, 3]);
    const [Count, setCount] = useState([]);
    const [loadingBooks, setLoadingBooks] = useState(true);
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    // useEffect(() => {
    //     ApiCall();
    //     // Member(); 
    // }, []);

    // // Book Details Store ->
    // async function ApiCall() {
    //     setLoadingBooks(true)
    //     try {

    //         var senddataapi = {
    //             "owner": UserDetails.recno,
    //             // "memberrecno": UserDetails.recno,
    //         }

    //         const res_BooksDetails = await axios.post(AppConstants.APIurl + '/getbookaddedbymember/', senddataapi);

    //         // const res_BooksDetails = await axios.post(AppConstants.APIurl + '/filterbookmaster/', senddataapi);
    //         // console.log('data', res_BooksDetails.data)
    //         setBookData(res_BooksDetails.data.Message);
    //         setCount(res_BooksDetails.data.Count);
    //         // console.log('data', res.data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     setLoadingBooks(false)
    // }

    // const {
    //     isOpen,
    //     onOpen,
    //     onClose
    // } = useDisclose();

    // const { data: apiRes } = await axios.delete(url,{ data: { recno : 512  //payload} });




    return (
        // <NativeBaseProvider>
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'dark-content'}
                showHideTransition={'slide'}
            />


            <View style={{ flex: 1 }}>
                {/* <ScrollView style={{ flex: 1 }}> */}
                {
                    !loadingBooks ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color={'dodgerblue'} />
                    </View>) : (<>
                        <ScrollView
                        // refreshControl={
                        //     <RefreshControl
                        //         onRefresh={ApiCall}
                        //         refreshing={loadingBooks}
                        //     />
                        // }
                        >
                            {
                                BookData.length == 0 ?
                                    (
                                        <View style={{ height: 400, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', }}>You Dont Have A Book</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>Click on Add Book, To Add Book In Your Library</Text>
                                        </View>
                                    ) : (
                                        <View style={{ flex: 3, marginHorizontal: "1%", marginTop: '5%' }}>
                                            <View style={{ marginHorizontal: '3%' }}>
                                                <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>
                                                    Your All Books ,
                                                </Text>
                                            </View>
                                            {
                                                BookData.map((item, index) => {
                                                    return (
                                                        <View style={{ marginHorizontal: '2%', marginVertical: "1%", }} key={index.toString()}>
                                                            <TouchableOpacity onPress={() => navigation.navigate('SubscribeBook', { item })}>
                                                                <Card style={{ height: 77, width: '100%', borderRadius: 12 }}>
                                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                                        <View style={{ flex: 0.4, borderRadius: 12 }}>
                                                                            {item.image ? (
                                                                                <Image
                                                                                    // source={{ uri: `data:image/png;base64,${item.image}` }}
                                                                                    source={{ uri: ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbooks%2F&psig=AOvVaw3PL-s30aNSRwxvTcY-S0HW&ust=1670083018030000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCLpZum2_sCFQAAAAAdAAAAABAD') }}

                                                                                    style={{ height: "100%", width: "95%" }}
                                                                                    resizeMode="cover"
                                                                                />
                                                                            ) : (
                                                                                <Image style={{ width: 80, height: 80, borderRadius: 10, opacity: 0.2 }}
                                                                                    // source={require('../Images/image-not-found.png')}
                                                                                    source={{ uri: ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbooks%2F&psig=AOvVaw3PL-s30aNSRwxvTcY-S0HW&ust=1670083018030000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCLpZum2_sCFQAAAAAdAAAAABAD') }}
                                                                                    sou
                                                                                    resizeMode='contain' />)
                                                                            }
                                                                        </View>
                                                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                                                            <Text style={{ fontSize: 18, fontWeight: '600', textTransform: 'uppercase', color: 'black', paddingTop: '3%' }}> {item?.booktitle} Book Title </Text>
                                                                            <Text style={{ fontSize: 13, textTransform: 'uppercase' }}> {item?.bookauthor} Auther 2</Text>
                                                                        </View>
                                                                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Icon
                                                                                name="ellipsis-vertical-circle-outline"
                                                                                type="ionicon"
                                                                                color="black"
                                                                                size={35}
                                                                                onPress={() => navigation.navigate('EditBook', { ...item, image: undefined })}
                                                                            />
                                                                        </View>
                                                                    </View>
                                                                </Card>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    )
                            }





                        </ScrollView>


                    </>)
                }

                {/* </ScrollView> */}

            </View>

            <View style={{ flex: 0.1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('NewBookAdd')} style={styles.Logout_CardStyle}>

                            <View style={{ flex: 2 }}>
                                <Text style={styles.Button_Text}>Add Book</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Icon
                                    name="add-outline"
                                    type="ionicon"
                                    color="dodgerblue"
                                    size={30}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
        // </NativeBaseProvider >
    );
};

export default BooksDetails;

const styles = StyleSheet.create({
    CardStyle: {
        marginHorizontal: 10,
        marginVertical: 2,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        padding: 10,
    },
    Header_CardStyle: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    Logout_CardStyle: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 10,
        // padding: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
        // justifyContent:'space-around'
    },
    Card_Text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    Button_Text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'dodgerblue',
        textAlign: 'center'
    },
    Card_Text_SubTitle: {
        fontSize: 14,
        fontWeight: '400',
    },
    B_Button: {
        padding: 10,
        borderRadius: 10,
        borderColor: 'dodgerblue',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Book_ShowCase: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});
