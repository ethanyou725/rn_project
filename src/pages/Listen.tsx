import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {IProps} from '~/navigator/BottomTabs';

class Listen extends Component<IProps> {
  render() {
    return (
      <View>
        <Text>Listen222</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail', {id: 555})}
        />
      </View>
    );
  }
}

export default Listen;
