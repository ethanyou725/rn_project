import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {IProps} from '../navigator/BottomTabs';
import {useLocalStore, useObserver} from 'mobx-react'; // 6.x

class Home extends Component<IProps> {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>Home2223</Text>
        <SmartTodo />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Detail', {id: 123})}
        />
      </View>
    );
  }
}

export const SmartTodo = () => {
  const todo = useLocalStore(() => ({
    title: 'Click to toggle',
    done: false,
    toggle() {
      todo.done = !todo.done;
    },
    get emoji() {
      return todo.done ? '😜' : '🏃';
    },
  }));

  return useObserver(() => (
    <Button onPress={todo.toggle} title={`${todo.title}${todo.emoji}`} />
  ));
};

export default Home;
