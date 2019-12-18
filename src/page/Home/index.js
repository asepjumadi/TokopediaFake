import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '@common';
const {IconX, ICON_TYPE} = Icons;
import {CarouselActive} from '@components';
import Shimmer from 'react-native-shimmer';
import Carousel from 'react-native-snap-carousel';
import {CardSlider} from '@components';

const data = [
  {
    id: 1,
    url:
      'https://ecs7.tokopedia.net/img/cache/1242/banner/2019/11/25/77927732/77927732_34c829d4-d2fa-4a60-a27a-9d579b1b3416.jpg',
  },
  {
    id: 2,
    url:
      'https://ecs7.tokopedia.net/img/cache/1242/banner/2019/11/25/77927732/77927732_875f7026-70cf-4e87-b449-f781ea05a79d.jpg',
  },
  {
    id: 3,
    url:
      'https://ecs7.tokopedia.net/img/cache/1242/banner/2019/11/25/77927732/77927732_93b599c2-78f5-49f3-8f2e-f441bb93fdf0.jpeg',
  },
  {
    id: 4,
    url:
      'https://ecs7.tokopedia.net/img/cache/1242/banner/2019/11/25/77927732/77927732_34c829d4-d2fa-4a60-a27a-9d579b1b3416.jpg',
  },
];

const coredata = [
  {
    id: 1,
    url: '',
    iconY: 'windows',
    tintColor: 'green',
    localimg: '',
    content: 'Sebuah Aplikasi',
    isIcon: true,
    isUrl: false,
    press: () => console.log('post go'),
  },
  {
    id: 1,
    url: '',
    iconY: 'facebook',
    tintColor: 'oceanblue',
    localimg: '',
    content: 'Deposit Fb ads ',
    isIcon: true,
    isUrl: false,
    press: () => console.log('post go'),
  },
  {
    id: 1,
    url: '',
    iconY: 'soundcloud',
    tintColor: 'rgba(10,20,78,0.4)',
    localimg: '',
    content: 'Deposit Fb ads ',
    isIcon: true,
    isUrl: false,
    press: () => console.log('post go'),
  },
  {
    id: 1,
    url: '',
    iconY: 'xing',
    tintColor: 'pink',
    localimg: '',
    content: 'Deposit Fb ads ',
    isIcon: true,
    isUrl: false,
    press: () => console.log('post go'),
  },
  {
    id: 1,
    url: 'http://www.pngnames.com/files/4/Gps-Icon-PNG-Free-Background.png',
    iconY: 'gamepad',
    tintColor: 'oceanblue',
    localimg: '',
    content: 'Deposit Fb ads ',
    isIcon: false,
    isUrl: true,
    press: () => console.log('post go'),
  },
  {
    id: 1,
    url: 'https://www.fourjay.org/myphoto/f/68/683285_icon-png-logos.jpg',
    iconY: 'facebook',
    tintColor: 'blue',
    localimg: '',
    content: 'Deposit Fb ads ',
    isIcon: false,
    isUrl: true,
    press: () => console.log('post go'),
  },
];

const datacard = [
  {
    title: 'barang aneh',
    dicount: '20%',
    price: '100.000',
    priced: '80.000',
    onPressed: () => console.log('saya press data ke 1'),
    image:
      'data:image/jpeg;base64,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',
    isDiscount: true,
  },
  {
    title: 'barang aneh',
    dicount: '20%',
    price: '100.000',
    priced: '80.000',
    onPressed: () => console.log('saya press data ke 2'),
    image:
      'https://media.karousell.com/media/photos/products/2018/01/01/hp_dan_electronik_1514819523_576b5540.jpg',
    isDiscount: false,
  },
  {
    title: 'barang aneh',
    dicount: '20%',
    price: '100.000',
    priced: '80.000',
    onPressed: () => console.log('saya press data ke 3'),
    image: '',
    isDiscount: false,
  },
  {
    title: 'barang aneh',
    dicount: '20%',
    price: '100.000',
    priced: '80.000',
    onPressed: () => console.log('saya press data ke 4'),
    image:
      'https://dynamic.zacdn.com/4uj0n9l3z0I7LEAfbruIklMhQ5k=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/2nd-red-7541-1377671-1.jpg',
    isDiscount: false,
  },
];
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchin: '',
      heightState: 150,
      isLoading: true,
    };
  }
  onWaitingMode() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }
  componentDidMount() {
    console.log(this.state.searchin);
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }
  renderItem = ({item, index}) => {
    console.log(item.uri);
    return (
      <Image
        style={{width: null, height: null, resizeMode: 'contain', flex: 1}}
        source={{uri: item.url}}
      />
    );
  };
  render() {
    console.log(this.state.searchin.length);
    return (
      <KeyboardAvoidingView>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={{
            height: 650,
            maxHeight: 1000,
            width: Dimensions.get('window').width,
          }}>
          <LinearGradient
            colors={['#856a5b', '#507044']}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            style={{
              height: this.state.heightState,
              width: Dimensions.get('window').width,
              left: 0,
              right: 0,
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 18,
                justifyContent: 'space-around',
                alignItems: 'center',
                top: '10%',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  borderRadius: 10,
                  width: '60%',
                  height: '90%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <IconX
                    name={'search'}
                    style={{marginBottom: 5}}
                    origin={ICON_TYPE.FONT_AWESOME}
                    color={'gray'}
                    size={15}
                  />
                  <TextInput
                    placeholder="Cari Barang Original"
                    style={{fontSize: 12, left: '10%'}}
                    value={this.state.searchin}
                    onChangeText={item => this.setState({searchin: item})}
                  />
                  <IconX
                    name={'camera'}
                    style={{marginBottom: 5, left: '90%'}}
                    origin={ICON_TYPE.FONT_AWESOME}
                    color={'gray'}
                    size={14}
                  />
                </View>
              </View>

              <TouchableOpacity underlayColor="green">
                <IconX
                  name={'heart'}
                  style={{marginBottom: 5}}
                  origin={ICON_TYPE.FONT_AWESOME}
                  color={'white'}
                  size={23}
                />
              </TouchableOpacity>

              <TouchableOpacity underlayColor="green">
                <IconX
                  name={'mail'}
                  style={{marginBottom: 5}}
                  origin={ICON_TYPE.FEATHER_ICONS}
                  color={'white'}
                  size={23}
                />
              </TouchableOpacity>
              <TouchableOpacity underlayColor="green">
                <IconX
                  name={'bell'}
                  style={{marginBottom: 5}}
                  origin={ICON_TYPE.FONT_AWESOME}
                  color={'white'}
                  size={23}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View style={{height: 100, top: -50}}>
            <Carousel
              autoplayDelay={500}
              autoplay={true}
              loop={true}
              inactiveSlideOpacity={0.6}
              inactiveSlideScale={0.65}
              firstItem={1}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              data={data}
              renderItem={this.renderItem}
              pagingEnabled={true}
            />
          </View>

          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                flexDirection: 'row',
                top: -30,
                padding: 10,
                borderColor: 'grey',
                borderWidth: 0.1,
                elevation: 0.5,
                borderRadius: 5,
                shadowColor: 'gray',
                shadowOffset: 0.5,
                borderBottomColor: '#d5d5d5',
                borderBottomWidth: 0.3,
              }}>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                  underlayColor="green"
                  style={{alignItems: 'center', marginRight: 10}}>
                  <IconX
                    name={'qrcode'}
                    style={{marginBottom: 5}}
                    origin={ICON_TYPE.FONT_AWESOME}
                    color={'gray'}
                    size={27}
                  />
                  <Text style={{fontSize: 12, fontWeight: '400'}}>Scan</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  borderColor: '#dddd',
                  marginRight: 10,
                }}
              />
              <View style={{flexDirection: 'column', top: 6}}>
                <TouchableOpacity
                  underlayColor="purple"
                  style={{
                    alignItems: 'center',
                    marginRight: 10,
                    flexDirection: 'row',
                  }}>
                  <IconX
                    name={'paypal'}
                    style={{marginBottom: 5}}
                    origin={ICON_TYPE.FONT_AWESOME}
                    color={'rgba(25,0,90,0.8)'}
                    size={25}
                  />
                  <View style={{flexDirection: 'column', marginLeft: 10}}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      PAYPAL
                    </Text>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      AKTIVASI
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  borderColor: '#dddd',
                  marginRight: 10,
                  marginLeft: 60,
                }}
              />
              <View style={{flexDirection: 'column', top: 6}}>
                <TouchableOpacity
                  underlayColor="purple"
                  style={{
                    alignItems: 'center',
                    marginRight: 10,
                    flexDirection: 'row',
                  }}>
                  <IconX
                    name={'money'}
                    style={{marginBottom: 5}}
                    origin={ICON_TYPE.FONT_AWESOME}
                    color={'green'}
                    size={25}
                  />
                  <View style={{flexDirection: 'column', marginLeft: 10}}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        alignItems: 'center',
                        marginRight: 23,
                        borderRadius: 2,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: '800',
                          fontSize: 12,
                        }}>
                        PROMO
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      3 Kupon Baru!
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView horizontal={true} style={{top: -20}}>
              <View style={{flexDirection: 'row'}}>
                {coredata.map(item => {
                  return (
                    <CarouselActive
                      isIcon={item.isIcon}
                      isUrl={item.isUrl}
                      iconY={item.isIcon == true ? item.iconY : null}
                      url={item.isUrl == true ? item.url : null}
                      tintColor={item.isIcon == true ? item.tintColor : null}
                      localim={item.isIcon == false ? item.localimg : null}
                      content={item.content}
                      press={item.press}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <LinearGradient
            colors={[
              'rgba(3, 33, 64,0.9)',
              '#083663',
              'rgba(50, 172, 217,0.9)',
              'rgba(175, 235, 35,0.5)',
              'rgba(175, 235, 35,0.8)',
              'rgba(235, 235, 35,0.5)',
            ]}
            start={{x: -0.5, y: -0.2}}
            end={{x: 2, y: 0.5}}
            style={{
              width: '95%',
              height: 76,
              right: 0,
              left: 10,
              top: 0,
              bottom: 0,
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
              <View style={{flexDirection: 'column', marginRight: 10}}>
                <Text
                  style={{color: '#f5f5f5', fontSize: 14, fontWeight: 'bold'}}>
                  Gajian Extra Sekarang
                </Text>
                <Text style={{color: 'white', fontSize: 11, fontWeight: '300'}}>
                  Bebas Ongkir 5x +Diskon hingga 5..
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontSize: 13, padding: 8}}>
                    CEK SEKARANG
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              {datacard.map(item => {
                return (
                  <CardSlider
                    isImgnull={item.image.length < 3 ? true : false}
                    image={item.image}
                    title={item.title}
                    isDiscount={item.isDiscount}
                    price={item.isDiscount == true ? item.price : null}
                    priced={item.priced}
                    dicount={item.isDiscount == true ? item.dicount : null}
                    onPressed={item.onPressed}
                    isLoading={this.state.isLoading}
                  />
                );
              })}
            </View>
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Home;
