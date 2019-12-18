import React, { Component } from 'react';
import { View, Text ,Image,TouchableOpacity} from 'react-native';
import Shimmer from 'react-native-shimmer'
class CardSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
      let{isImgnull,title,dicount,price,priced,onPressed,image,isDiscount,isLoading}=this.props
    return (
   <TouchableOpacity style={{flexDirection:'column',width:100,height:200,opacity:1}} onPress={onPressed} activeOpacity={5} >
    <View style={{marginRight:10,marginTop:10}}>
      <View style={{alignItems:'center'}}>
      {isLoading==true
      ?<Shimmer duration={800} autoRun={true} animating={true} >
        <View style={{backgroundColor:'#d4d9d6',width:90,height:90}} resizeMode="cover">
        </View> 
      </Shimmer>
      :isImgnull==true?<Image source={{uri:'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'}} style={{width:90,height:90}} resizeMode="cover"/>
      :<Image source={{uri:image}} style={{height:90,width:100}} resizeMode="contain"/>}
      </View>
              <View style={{marginHorizontal:10,flexDirection:'column'}}>
                      <Text style={{fontSize:13,fontWeight:'bold',}}>{title}</Text>
                    {isDiscount==true? 
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'rgba(215,55,25,0.2)',marginRight:2}}>
                              <Text style={{fontSize:7,fontWeight:'bold',padding:3,color:'red',borderRadius:0.5}}>{dicount} OFF</Text>
                            </View>
                              <Text style={{fontSize:12}}>Rp.{price}</Text>
                        </View>:null
                    }
              <Text style={{fontSize:13,fontWeight:'bold',color:'red'}}>Rp.{priced}</Text>
              </View>
      </View>
   </TouchableOpacity>
    );
  }
}

export default CardSlide;
