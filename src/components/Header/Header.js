import {Text} from 'react-native';
import {View} from 'react-native';
import {PRIMARY_COLOR} from '../../colors';

export const AppHeader = ({title = ''}) => {
  return (
    <View style={{backgroundColor: PRIMARY_COLOR}}>
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
          padding: '5%',
          fontWeight: 'bold',
          color: 'white',
        }}>
        {title}
      </Text>
    </View>
  );
};
