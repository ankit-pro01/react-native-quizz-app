import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import {ActivityIndicator, Card} from 'react-native-paper';
import {PRIMARY_COLOR, TERTIARY_COLOR, WHITE_COLOR} from '../colors';
import {AppHeader} from '../components/Header/Header';
import {Layout} from '../components/Layout/Layout';
import {errorToast, infoToast} from '../hooks/RNFunctions';
import {getLogs} from '../services/logsAPI';

export const UserScoreLogs = ({navigation, route}) => {
  const {item} = route?.params;
  const [categoryLogs, setCategoryLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('im called');
      getLogs(item)
        .then(res => {
          setLoading(false);
          if (!res?.err) {
            setCategoryLogs(res?.data);
          } else {
            infoToast('ERROR', 'Unable to load results');
          }
        })
        .catch(err => {
          setLoading(false);
          infoToast('ERROR', 'Unable to load results');
        });
    }
  }, [isFocused]);

  return (
    <ScrollView
      style={{
        backgroundColor: TERTIARY_COLOR,
      }}>
      <AppHeader title={`LOGS (${item})`} />
      <View>
        {loading && <ActivityIndicator />}
        {categoryLogs?.length === 0 ? (
          <Text
            style={{
              textAlign: 'center',
              padding: 8,
              fontSize: 14,
              fontWeight: '800',
            }}>
            No Logs Found
          </Text>
        ) : (
          categoryLogs.map(log => {
            return (
              <Card
                style={{
                  backgroundColor: WHITE_COLOR,
                  margin: 6,
                  borderRadius: 6,
                  padding: 12,
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        marginHorizontal: 3,
                        color: PRIMARY_COLOR,
                        fontWeight: '600',
                      }}>
                      {log?.timeStamp}
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: 3,
                        color: PRIMARY_COLOR,
                        fontWeight: '600',
                      }}>
                      {log?.user?.toUpperCase()}
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: 3,
                        color: PRIMARY_COLOR,
                        fontWeight: '600',
                      }}>
                      has scored
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: 3,
                        color: PRIMARY_COLOR,
                        fontWeight: '600',
                      }}>
                      {log?.score}.
                    </Text>
                  </View>
                </View>
              </Card>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};
