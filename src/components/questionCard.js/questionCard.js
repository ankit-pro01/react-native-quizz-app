import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {Divider} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  TERTIARY_COLOR,
} from '../../colors';

const defaultSelectedColor = '#9966ff';

export const QuestionCard = ({
  question,
  options,
  correctAnswer,
  idx,
  isSubmit,
  setUserScore,
}) => {
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    if (userSelection === correctAnswer) {
      setUserScore(prev => prev + 1);
    }
  }, [userSelection]);

  const getbackgroundColor = opt => {
    if (isSubmit) {
      if (userSelection === correctAnswer && userSelection === opt) {
        return SUCCESS_COLOR;
      } else if (userSelection !== correctAnswer && userSelection === opt) {
        return ERROR_COLOR;
      } else if (opt === correctAnswer) {
        return SUCCESS_COLOR;
      }
    } else {
      if (userSelection === opt) return TERTIARY_COLOR;
    }
  };

  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.text}>{`${idx + 1}. ${question}`}</Text>
        <Divider
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: 1,
            marginBottom: 4,
          }}
        />
        {options?.map((option, index) => {
          return (
            <TouchableOpacity
              key={option}
              style={{
                ...styles.options,
                backgroundColor: getbackgroundColor(option),
              }}
              onPress={() => {
                setUserSelection(option);
              }}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 4,
    marginTop: 21,
    marginHorizontal: 21,
    borderRadius: 20,
    borderColor: SECONDARY_COLOR,
    borderWidth: 2,
    backgroundColor: SECONDARY_COLOR,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    color: PRIMARY_COLOR,
  },
  options: {
    borderRadius: 15,
    margin: '2%',
  },
});
