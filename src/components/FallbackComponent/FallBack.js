import {Text, View} from 'react-native';

export const FallBackComponent = ({message}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold'}}>{message}</Text>
    </View>
  );
};
