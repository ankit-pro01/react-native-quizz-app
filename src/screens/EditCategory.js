import {StyleSheet, View, TextInput, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  WHITE_COLOR,
} from '../colors';
import {SecondaryButton} from '../components/Button/SecondaryButton';
import Avatar from '../../assets/avatar2.png';
import {errorToast, hideMessage, successToast} from '../hooks/RNFunctions';
import {Layout} from '../components/Layout/Layout';
import {AppHeader} from '../components/Header/Header';
import {addNewCategory, deleteCategory} from '../services/categoriesAPI';
import {ActivityIndicator} from 'react-native-paper';

const EditCategory = ({navigation, route}) => {
  const {item, catRefID} = route?.params;
  const [categoryName, setCategoryname] = useState(item);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateCategory = () => {
    const trimName = categoryName.trim();
    if (/[a-zA-Z]{3,}/.test(trimName)) {
      return true;
    } else {
      return false;
    }
  };

  const deleteHandler = () => {
    setLoading(true);
    deleteCategory(catRefID)
      .then(res => {
        setLoading(false);
        if (!res?.err) {
          successToast(
            'SUCCESS',
            `${categoryName?.toUpperCase()} CATEGORY SUCESSFULLY DELETED`,
          );
          navigation.navigate('Home', {
            type: 'Admin',
          });
        } else {
          errorToast('ERROR', 'UNABLE TO DELETE CATEGORY');
          setError(true);
        }
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        errorToast('ERROR', 'UNABLE TO DELETE CATEGORY');
      });
  };

  const addNewHandler = () => {
    if (validateCategory) {
      setLoading(true);
      addNewCategory(categoryName)
        .then(res => {
          setLoading(false);
          if (!res?.err && res?.data) {
            successToast(
              'SUCCESS',
              `${categoryName?.toUpperCase()} CATEGORY SUCESSFULLY ADDED`,
            );
            navigation.navigate('Home', {
              type: 'Admin',
              userName: '',
            });
          } else {
            errorToast('ERROR', `${res?.err}`);
            setError(true);
          }
        })
        .catch(err => {
          setLoading(false);
          setError(true);
          errorToast('ERROR', err);
        });
    } else {
      setLoading(false);
      errorToast('ERROR', 'UNABLE TO EDIT CATEGORY');
      setError(true);
    }
  };

  return (
    <Layout>
      <AppHeader navigation={navigation} title={`EDIT CATEGORY (${item})`} />
      <View style={{height: '100%'}}>
        <ScrollView>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <SecondaryButton
                bgColor={ERROR_COLOR}
                label={`Delete Category`}
                onPressHandler={deleteHandler}
              />
              <View
                style={{
                  justifyContent: 'center',
                  marginVertical: '10%',
                  borderRadius: 50,
                  height: 300,
                }}>
                <View
                  style={{
                    backgroundColor: error ? ERROR_COLOR : WHITE_COLOR,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: '5%',
                    borderRadius: 50,
                    marginHorizontal: '10%',
                    borderColor: PRIMARY_COLOR,
                    borderWidth: 2,
                  }}>
                  <TextInput
                    style={{
                      fontSize: 24,
                      color: PRIMARY_COLOR,
                    }}
                    value={categoryName}
                    onChangeText={text => {
                      hideMessage();
                      setError(false);
                      setCategoryname(text);
                    }}
                    placeholder={'Enter Category Name'}
                    placeholderTextColor={'#D3d3d3'}
                  />
                </View>
                <SecondaryButton
                  label="Create New"
                  onPressHandler={addNewHandler}
                />
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default EditCategory;
