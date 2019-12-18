import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image} from 'react-native';
import {Icons} from '@common'
const {IconX,ICON_TYPE} =Icons
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient'
class CaraouselActive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let {isIcon,isUrl,iconY,url,tintColor,localimg,content,press}=this.props
      
    return (
     <TouchableOpacity style={{flexDirection:'column',width:60,marginRight:10}} onPress={press}>
       <LinearGradient colors={['rgba(164, 186, 125,0.5)','rgba(103, 168, 132,0.5)']} style={{width:60,height:60,borderRadius:60/4,alignItems:'center'}}>
        <View style={{margin:10}}>
            {
              isIcon==true?<IconX style={{marginBottom: 5}}
                  origin={ICON_TYPE.FONT_AWESOME}
                  name={iconY}
                  color={tintColor}
                  size={40}/>:
                  <Image style={{width:40,height:40}} resizeMode="contain" source={isUrl==true?{uri:url}:null}/>
              }
          </View> 
        </LinearGradient>
        <Text>{content}</Text>
     </TouchableOpacity>
    );
  }
}

export default CaraouselActive;
