import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import {Explore, Updates} from '@page';
import {HeaderId} from '@components';
import {Icons} from '@common';
import {red} from 'ansi-colors';
const {IconX, ICON_TYPE} = Icons;
const DATA = [
  {
    id: '1',
    titlestore: 'MacBerry',
    iconstrore: 'https://ecs7.tokopedia.net/img/repsys/silver-1.gif',
    logostore:
      'https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2015/5/6/193264/193264_e1080972-f398-11e4-b11c-66f549bc7260.jpg',
    containstore:
      'Buruan beli produk apple khusus iphone berbagai merk dengan garansi 1 tahun dari apple store  ',
    product: [
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/9/81544138/81544138_818e0256-5c10-4f39-b46a-3b27f60a64e9_700_700',
        price: 'Rp. 2.500.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/8/81544138/81544138_5653b833-eaa2-44a7-b01d-96b5898705f8_1000_1000',
        price: 'Rp. 1.250.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/8/81544138/81544138_a777ae77-0c8e-4528-a64d-5729b1cf941f_800_800',
        price: 'Rp. 3.000.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/8/81544138/81544138_a37e89ea-3b78-42f2-9f2f-1d69542079c7_470_470',
        price: 'Rp. 800.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/7/81544138/81544138_f23b9bd6-f78a-484e-a455-d37f3930dbc6_572_572',
        price: 'Rp. 1.600.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/12/81544138/81544138_f68f7ff3-5484-4676-b952-a18e884ef27c_960_960',
        price: 'Rp. 5.000.000',
      },
    ],
  },
  {
    id: '2',
    titlestore: 'ChocoApple',
    iconstrore: 'https://ecs7.tokopedia.net/img/repsys/diamond-1.gif',
    logostore:
      'https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2015/9/20/5138814/5138814_fa7e6716-cd91-40e6-bc1a-7a1787ab769a.jpg',
    containstore:
      'Jual Hp berbagai Merk dengan harga terjangkau kulitas original pabrikan',
    product: [
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/5/10/5138814/5138814_1fff984f-bcc5-4dd9-8fb2-efa36cf6d171_700_700',
        price: 'Rp. 2.500.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/10/5138814/5138814_ee2fa5c1-c4c5-460a-b510-eff0025ce281_700_700',
        price: 'Rp. 1.250.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/10/5138814/5138814_09ac93a8-1a39-48d4-a893-1a9665b51535_700_700',
        price: 'Rp. 3.000.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/10/5138814/5138814_8e30c39a-cf5d-438b-a5f0-d9f94cf0d4ea_700_700',
        price: 'Rp. 800.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/12/3/5138814/5138814_fc19e543-6d31-4e23-b530-92c462ee4297_700_700',
        price: 'Rp. 1.600.000',
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/30/5138814/5138814_700603c7-c615-482b-bc62-a8c49e0698a2_700_700',
        price: 'Rp. 5000.000',
      },
    ],
  },
  {
    id: '3',
    titlestore: 'BrosPinapple',
    iconstrore: 'https://ecs7.tokopedia.net/img/repsys/badges-off.jpg',
    logostore:
      'https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2017/5/19/19262338/19262338_624f759a-c2b3-4a2f-8802-0e0808aba18e.jpg',
    containstore: 'Jual Hp lengkap Layar Injak Berhadiah Baju dan Tas',
    product: [
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/11/14/52140632/52140632_3d137659-1019-4a3f-b4ab-2460ad4503ff_1200_1200',
        price: 'Rp. 2.500.000',
        pressin: () => console.log('hallo 1'),
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/12/3/52140632/52140632_7ba53618-d55b-4ab7-af9f-20d6b45921f8_1200_1200',
        price: 'Rp. 1.250.000',
        pressin: () => console.log('hallo 1'),
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/12/3/52140632/52140632_7ba53618-d55b-4ab7-af9f-20d6b45921f8_1200_1200',
        price: 'Rp. 3.000.000',
        pressin: () => console.log('hallo 1'),
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/11/14/52140632/52140632_27147fa4-1eea-494e-bbce-d4dc5b49369d_1200_1200',
        price: 'Rp. 800.000',
        pressin: () => console.log('hallo 1'),
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/300-square/product-1/2019/11/14/52140632/52140632_b2582cb3-1d6c-4109-89c6-d36f540f3533_1200_1200',
        price: 'Rp. 1.600.000',
        pressin: () => console.log('hallo 1'),
      },
      {
        id: '101',
        imgproduct:
          'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/14/52140632/52140632_605e540b-89ea-474a-8294-3e0f9f019f55_1200_1200',
        price: 'Rp. 5.000.000',
        pressin: () => console.log('hallo 1'),
      },
    ],
  },
];
function Item({titlestore, iconstrore, logostore, containstore, product}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        borderColor: 'grey',
        borderWidth: 0.2,
        shadowColor: 'gray',
        elevation: 1,
        borderRadius: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5}}>
          <Image
            source={{uri: logostore}}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image
              source={{uri: iconstrore}}
              style={{width: 20, height: 20, marginRight: 10}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 12, fontWeight: '500', color: 'black'}}>
              {titlestore}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '200',
          color: 'gray',
          marginHorizontal: 10,
        }}>
        {containstore}
      </Text>
      <FlatGrid
        itemDimension={80}
        items={product}
        style={{marginTop: 20, flex: 1}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={item.pressin}
            style={{flexDirection: 'column'}}>
            <Image
              source={{uri: item.imgproduct}}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
            <Text style={{color: 'red', fontSize: 11, fontWeight: '400'}}>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const FirstRoute = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Item
          titlestore={item.titlestore}
          iconstrore={item.iconstrore}
          logostore={item.logostore}
          containstore={item.containstore}
          product={item.product}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};
const SecondRoute = () => {
  return (
    <View>
      <Text>hallo saya asep dua</Text>
    </View>
  );
};
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      index: 0,
      routes: [
        {
          key: 'Update',
          title: 'Updates',
        },
        {
          key: 'Explore',
          title: 'Explore',
        },
      ],
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <HeaderId />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            Update: FirstRoute,
            Explore: SecondRoute,
          })}
          swipeEnabled={true}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          style={{backgroundColor: 'white'}}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{backgroundColor: 'green'}}
              style={{backgroundColor: '#fff'}}
              activeColor="green"
              inactiveColor="black"
              getLabelText={({route}) => route.title}
            />
          )}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Feed;
