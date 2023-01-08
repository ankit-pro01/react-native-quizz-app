import {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../colors';
import {errorToast, infoToast} from '../../hooks/RNFunctions';
import {getStoreData, setStoreData} from '../../hooks/Storage';

export const AppHeader = ({navigation, title = ''}) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getStoreData('admin-login').then(res => {
      if (res === 'admin') {
        setIsAdmin(true);
      }
    });
  }, [title]);

  const handleLogout = () => {
    setStoreData('admin-login', 'user')
      .then(res => {
        navigation.navigate('Login');
      })
      .catch(er => {
        infoToast('INFO', 'NOT ABLE TO LOGOUT');
      });
  };

  return (
    <View
      style={{
        backgroundColor: PRIMARY_COLOR,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            padding: '5%',
            fontWeight: 'bold',
            color: 'white',
          }}>
          {title}
        </Text>
      </View>
      {isAdmin && (
        <View>
          <TouchableOpacity
            style={{
              borderColor: WHITE_COLOR,
              borderWidth: 2,
              padding: 8,
              borderRadius: 6,
            }}
            onPress={handleLogout}>
            <Text style={{color: WHITE_COLOR, fontSize: 12}}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
