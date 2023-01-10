import {View} from 'react-native';
import React from 'react';
import {AppHeader} from '../components/Header/Header';
import {PrimaryButton} from '../components/Button/PrimaryButton';
import {Layout} from '../components/Layout/Layout';

const Category = ({navigation, route}) => {
  const {item, catRefID} = route?.params;
  return (
    <Layout>
      <AppHeader navigation={navigation} title={item} />
      <View style={{flex: 8, justifyContent: 'center'}}>
        <View>
          <PrimaryButton
            label={'Add Question'}
            onPressHandler={() => {
              navigation.navigate('AddQuestion', {
                item: item,
              });
            }}
          />
          <PrimaryButton
            label={'Edit Question'}
            onPressHandler={() => {
              navigation.navigate('EditQuestion', {
                item: item,
              });
            }}
          />
          <PrimaryButton
            label={'Edit Category'}
            onPressHandler={() => {
              navigation.navigate('EditCategory', {
                item: item,
              });
            }}
          />
          <PrimaryButton
            label={'Show Logs'}
            onPressHandler={() => {
              navigation.navigate('UserScoreLogs', {
                item: item,
                catRefID: catRefID,
              });
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Category;
