import {Text} from 'react-native';
import {TextInput} from 'react-native';
import {View} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../colors';
import {hideMessage} from '../../hooks/RNFunctions';

export const QuestionForm = ({newQuestion, setNewQuestion, item}) => {
  return (
    <Card
      style={{
        flex: 9,
        margin: 10,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: WHITE_COLOR,
          borderRadius: 12,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            paddingTop: 8,
          }}>
          {`QUESTION (${item})`}
        </Text>
        <TextInput
          style={{
            fontSize: 16,
            paddingLeft: '2%',
            color: PRIMARY_COLOR,
          }}
          value={newQuestion?.question}
          defaultValue={newQuestion?.question}
          onChangeText={text => {
            hideMessage();
            setNewQuestion({...newQuestion, question: text});
          }}
          multiline
          numberOfLines={4}
          maxLength={150}
          placeholder="write your question here"
          placeholderTextColor={'#D3D3D3'}
        />
      </View>
      <Divider
        style={{
          backgroundColor: PRIMARY_COLOR,
          height: 2,
          marginHorizontal: '2%',
          marginBottom: 12,
        }}
      />
      {/* //OPTIONS */}
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
          OPTIONS
        </Text>
        <View>
          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: '2%',
              color: PRIMARY_COLOR,
            }}
            value={newQuestion?.options[0]}
            defaultValue={newQuestion?.options[0]}
            onChangeText={text => {
              hideMessage();
              let newOptions = newQuestion?.options;
              console.log('log', newOptions);
              if (!!newOptions) {
                newOptions[0] = text;
                setNewQuestion({...newQuestion, options: [...newOptions]});
              }
            }}
            maxLength={80}
            placeholder="option 1"
            placeholderTextColor={'#D3D3D3'}></TextInput>
          <Divider
            style={{
              height: 1,
              backgroundColor: 'gray',
            }}
          />
          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: '2%',
              color: PRIMARY_COLOR,
            }}
            value={newQuestion?.options[1]}
            onChangeText={text => {
              hideMessage();
              let newOptions = newQuestion?.options;
              if (!!newOptions) {
                newOptions[1] = text;
                console.log('hereeee->', newOptions[1]);
                setNewQuestion({...newQuestion, options: [...newOptions]});
              }
            }}
            maxLength={80}
            placeholder="option 2"
            placeholderTextColor={'#D3D3D3'}></TextInput>
          <Divider
            style={{
              height: 1,
              backgroundColor: 'gray',
            }}
          />

          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: '2%',
              color: PRIMARY_COLOR,
            }}
            value={newQuestion?.options[2]}
            onChangeText={text => {
              hideMessage();
              let newOptions = newQuestion?.options;
              if (!!newOptions) {
                newOptions[2] = text;
                setNewQuestion({...newQuestion, options: [...newOptions]});
              }
            }}
            maxLength={80}
            placeholder="option 3"
            placeholderTextColor={'#D3D3D3'}></TextInput>
          <Divider
            style={{
              height: 1,
              backgroundColor: 'gray',
            }}
          />

          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: '2%',
              color: PRIMARY_COLOR,
            }}
            value={newQuestion?.options[3]}
            onChangeText={text => {
              hideMessage();
              let newOptions = newQuestion?.options;
              if (!!newOptions) {
                newOptions[3] = text;
                console.log('hereeee->', newOptions[3]);

                setNewQuestion({...newQuestion, options: [...newOptions]});
              }
            }}
            maxLength={80}
            placeholder="option 4"
            placeholderTextColor={'#D3D3D3'}></TextInput>
          <Divider
            style={{
              height: 1,
              backgroundColor: 'gray',
            }}
          />
          {/* //more options */}
          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: '2%',
              color: PRIMARY_COLOR,
            }}
            value={newQuestion?.moreOptions}
            onChangeText={text => {
              hideMessage();
              setNewQuestion({...newQuestion, moreOptions: text});
            }}
            maxLength={80}
            placeholder="add more options with '|' eg. abc | xyz"
            placeholderTextColor={'#D3D3D3'}></TextInput>
        </View>
        <Divider
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: 2,
            marginHorizontal: '2%',
            marginBottom: 12,
          }}></Divider>
      </View>
      {/* //Correct Answer */}
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          paddingTop: 8,
        }}>
        Correct Answer
      </Text>
      <TextInput
        style={{
          fontSize: 16,
          paddingLeft: '2%',
          color: PRIMARY_COLOR,
        }}
        value={newQuestion?.correctAnswer}
        onChangeText={text => {
          hideMessage();
          setNewQuestion({...newQuestion, correctAnswer: text});
        }}
        maxLength={80}
        placeholder="Correct answer here"
        placeholderTextColor={'#D3D3D3'}></TextInput>
    </Card>
  );
};
