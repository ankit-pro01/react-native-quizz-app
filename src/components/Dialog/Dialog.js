import {Text, View} from 'react-native';
import {Button, Dialog, Portal, Provider} from 'react-native-paper';
import {PRIMARY_COLOR} from '../../colors';

export const DialogBox = ({show, handleDialog, title, body}) => {
  return (
    <Provider>
      <View>
        <Portal>
          <Dialog
            style={{
              borderWidth: 2,
              borderColor: PRIMARY_COLOR,
            }}
            visible={show}
            onDismiss={handleDialog}>
            <Dialog.Title
              style={{
                color: PRIMARY_COLOR,
                fontWeight: '800',
                fontSize: 28,
                textAlign: 'center',
              }}>
              {title}
            </Dialog.Title>
            <Dialog.Content>
              <Text
                style={{
                  color: PRIMARY_COLOR,
                  fontWeight: '600',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                {body}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={handleDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};
