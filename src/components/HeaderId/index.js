import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Icons} from '@common';
const {IconX, ICON_TYPE} = Icons;
class HeaderId extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
          top: 10,
          width: Dimensions.get('screen').width,
          height: 100,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',

              backgroundColor: '#f5f5f5',
              paddingLeft: 15,
              paddingRight: 60,
              paddingVertical: 5,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              left: -15,
            }}>
            <IconX
              name={'search'}
              style={{marginBottom: 5}}
              origin={ICON_TYPE.FONT_AWESOME}
              color={'gray'}
              size={15}
            />

            <TextInput
              placeholder="Cari Di Tokopedia"
              style={{fontSize: 15, marginLeft: 15}}
              value={this.state.searchin}
              onChangeText={item => this.setState({searchin: item})}
            />
          </View>
        </View>

        <TouchableOpacity underlayColor="green">
          <IconX
            name={'heart'}
            style={{marginBottom: 5, right: 10}}
            origin={ICON_TYPE.FONT_AWESOME}
            color={'gray'}
            size={23}
          />
        </TouchableOpacity>

        <TouchableOpacity underlayColor="green">
          <IconX
            name={'mail'}
            style={{marginBottom: 5, right: 10}}
            origin={ICON_TYPE.FEATHER_ICONS}
            color={'gray'}
            size={23}
          />
        </TouchableOpacity>
        <TouchableOpacity underlayColor="green">
          <IconX
            name={'bell'}
            style={{marginBottom: 5, right: 10}}
            origin={ICON_TYPE.FONT_AWESOME}
            color={'gray'}
            size={23}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeaderId;
