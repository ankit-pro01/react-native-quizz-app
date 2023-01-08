import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllCategories} from '../services/categoriesAPI';
import {ActivityIndicator} from 'react-native-paper';
import {AppHeader} from '../components/Header/Header';
import {PRIMARY_COLOR, WHITE_COLOR} from '../colors';
import {Layout} from '../components/Layout/Layout';
import {FallBackComponent} from '../components/FallbackComponent/FallBack';
import {ErrorToast} from 'react-native-toast-message';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const {type, userName} = route?.params;
  const isFocused = useIsFocused();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      getAllCategories()
        .then(res => {
          setLoading(false);
          if (!res?.err) {
            setCategories(res?.data);
          } else {
            ErrorToast('NETWORK ERROR', 'Unable to fetch data from api');
          }
        })
        .catch(er => {
          setLoading(false);
          ErrorToast('NETWORK ERROR', 'Unable to fetch data from api');
        });
    }
  }, [isFocused]);

  return (
    <Layout>
      <AppHeader navigation={navigation} title="SELECT CATEGORY" />
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      ) : (
        <View
          style={{
            flexWrap: 'wrap',
            marginVertical: '8%',
            flexDirection: 'row',
            paddingLeft: '2%',
          }}>
          {categories.length === 0 ? (
            <FallBackComponent
              message={'Unable to fetch data please try after some time'}
            />
          ) : (
            categories?.map(category => {
              return (
                <View style={styles.cube} key={category?._id}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      if (type === 'User') {
                        navigation.navigate('UserQuestion', {
                          item: category?.name,
                          userName,
                        });
                      } else {
                        navigation.navigate('Category', {
                          item: category?.name,
                          userName,
                          catRefID: category?._id,
                        });
                      }
                    }}>
                    <Text style={styles.cubeText}>{category?.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      )}
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  cube: {
    marginHorizontal: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: '3%',
    width: '30%',
    height: '30%',
    backgroundColor: WHITE_COLOR,
    borderWidth: 4,
    borderColor: PRIMARY_COLOR,
  },
  cubeText: {color: PRIMARY_COLOR, fontSize: 16, fontWeight: 'bold'},
});
