import {Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../colors';

export const PrimaryButton = ({label, onPressHandler}) => {
  return (
    <TouchableOpacity
      style={{
        height: '15%',
        justifyContent: 'center',
        backgroundColor: WHITE_COLOR,
        alignItems: 'center',
        marginVertical: '5%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: PRIMARY_COLOR,
        marginHorizontal: '10%',
      }}
      onPress={onPressHandler}>
      <Text style={{color: PRIMARY_COLOR, fontSize: 30}}>{label}</Text>
    </TouchableOpacity>
  );
};
