import {Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../colors';

export const SecondaryButton = ({
  bgColor = PRIMARY_COLOR,
  label,
  onPressHandler,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: '18%',
        justifyContent: 'center',
        backgroundColor: bgColor,
        alignItems: 'center',
        marginVertical: '4%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: WHITE_COLOR,
        marginHorizontal: '10%',
      }}
      onPress={onPressHandler}>
      <Text style={{color: WHITE_COLOR, fontSize: 30}}>{label}</Text>
    </TouchableOpacity>
  );
};
