import Toast from 'react-native-toast-message';

export const hideMessage = () => {
  Toast.hide();
};
export const successToast = (
  title,
  msg,
  visibilityTime = 3000,
  autoHide = true,
) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: title.toString(),
    text2: msg.toString(),
    visibilityTime: visibilityTime,
    autoHide: autoHide,
    topOffset: 30,
    bottomOffset: 40,
  });
};
export const errorToast = (
  title,
  msg,
  visibilityTime = 4000,
  autoHide = false,
) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: title.toString(),
    text2: msg.toString(),
    visibilityTime: visibilityTime,
    autoHide: autoHide,
    topOffset: 30,
    bottomOffset: 40,
  });
};
export const infoToast = (
  title,
  msg,
  visibilityTime = 4000,
  autoHide = true,
) => {
  Toast.show({
    type: 'info',
    position: 'top',
    text1: title.toString(),
    text2: msg.toString(),
    visibilityTime: visibilityTime,
    autoHide: autoHide,
    topOffset: 30,
    bottomOffset: 40,
  });
};
