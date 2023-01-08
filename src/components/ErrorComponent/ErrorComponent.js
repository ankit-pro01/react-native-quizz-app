import {Text, View} from 'react-native';

export const ErrorComponent = ({error = 'something went wrong'}) => {
  return (
    <View>
      <View
        style={{
          textAlign: 'center',
          padding: 8,
          margin: 8,
          borderColor: '#FF0000',
          borderWidth: 1,
          borderTopLeftRadius: 5,
          width: '75%',
        }}>
        <Text style={{fontSize: 18, color: '#FF0000'}}>{error}</Text>
      </View>
    </View>
  );
};
