import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Detail extends Component {
  render() {
    console.log(this.props, 'detail');
    return (
      <View>
        <Text>Detail333</Text>
      </View>
    );
  }
}

export default Detail;
