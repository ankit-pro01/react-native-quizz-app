import {View} from 'react-native';
import {TERTIARY_COLOR} from '../../colors';

export const Layout = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: TERTIARY_COLOR,
      }}>
      {children}
    </View>
  );
};
