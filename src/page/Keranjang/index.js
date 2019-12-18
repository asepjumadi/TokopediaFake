import React, {Component} from 'react';
import {View, Text, FlatList, Image, ImageBackground} from 'react-native';
const data = [
  {
    id: 1,
    name: 'hallo',
  },
];
class Keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={{fontStyle: 'normal', fontSize: 20}}> index </Text>
      </View>
    );
  }
}

export default Keranjang;
