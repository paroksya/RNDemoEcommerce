import { Picker } from '@react-native-picker/picker';
import React from 'react';

import{SafeAreaView,View,Text,TextInput,Image,ActivityIndicator} from "react-native";
import EventEmitter from 'react-native-eventemitter';
import { FloatingAction } from 'react-native-floating-action';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';
import {t,color,} from 'react-native-tailwindcss';
import Api from '../services/api';
export default class Dashboard extends React.Component {
  state={
    selectedValue:null,maindata:[],categories:[],filterdata:null,
loading:true,
}

    componentDidMount(){
        Api.products().then((res)=>{this.store(res)});
        EventEmitter.on("foo", (value)=>{
          this.setState({loading:true});
          Api.products().then((res)=>{this.store(res)});

      });
    }

    

    store=async(val)=>{
        // let detail = await AsyncStorage.getItem('language');
        // let parsed = JSON.parse(detail);
        // this.setState({language:parsed?parsed.lang:'en'});
        // Localization.setLanguage(this.state.language);
        // console.log(this.state.language);
        Api.categories().then((res)=>{this.setState({categories:res})});

        this.setState({maindata:val,filterdata:val});
        console.log(val);
        this.setState({loading:false});
//  console.log(this.state.data.filter(data=>data.category=="furnitures")); 

      }

categoryUpdate=(val)=>{
  this.setState({selectedValue:val});
const res = this.state.maindata;
// console.log(res);
 var op= res.filter(function(item,index){
  //  console.log(item);
  //  console.log("ierne");
  return item.category == val;
}).map(function(result){
  console.log("result")
   return result;
});
console.log(op);
  this.setState({filterdata:op});
}
render(){
  const actions = [
    {
      text: "Create",
      icon: require("../plus.png"),
      name: "Create",
      position: 1
    },
    
  ];
    if(this.state.loading){
        return( <ActivityIndicator
          color='#17868b'
          animating={true}
          style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
          }}
          size={50}
      />);
      }
    return(
<SafeAreaView style={[t.flex1]}>  
<TouchableOpacity onPress={()=>this.props.navigation.navigate('create')} containerStyle={[t.absolute,t.bottom0,t.right0,t.m5,t.z10,]}>
  <Image style={[t.h10,t.w10]} source={require('../plus.png')} />
</TouchableOpacity>
<TextInput style={{backgroundColor:"white",color:"black",margin:10,borderRadius:10,padding:5,height:50}} placeholderTextColor="grey" placeholder="Apple Watch, Samsung s21"/>    
<View style={{height:50,backgroundColor:"white", margin:10,borderRadius:10}}>
<Picker selectedValue={this.state.selectedValue}
         placeholder="Categories" dropdownIconColor={"grey"} 
         itemStyle={{color:"black",height:50,width:"100%",textAlign:"left"}}
        onValueChange={(itemValue, itemIndex) => this.categoryUpdate(itemValue)}
      >
        {this.state.categories.map((item)=>{
          return(
            <Picker.Item  label={item.name} value={item.name} />
          )
        })}
      
      </Picker>
      </View>
      <FlatGrid
        data={this.state.filterdata}       
        itemDimension={130}
        renderItem={({item,index}) => (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("details",{data:item})}
            style={[t.justifyCenter,t.flexCol,t.alignCenter,t.flex1,t.p5]}>
                <View style={{backgroundColor:"white",marginVertical:10,justifyContent:"center",alignItems:"center",height:180,width:150,borderRadius:15}}>
            <Image
              style={{height:170,width:140,resizeMode:"contain"}}
              source={{uri: item.avatar}}
            />
            </View>
<View style={{justifyContent:"center",paddingHorizontal:10}}>
<Text style={[t.textSm,t.textGray700,t.textCenter,t.selfStart,t.fontBold]}>{item.name}</Text>
<Text style={[t.textSm,t.textGray700,t.textCenter,t.mT3,t.fontExtrabold]}>${item.price}</Text>

</View>

          </TouchableOpacity>
        )}
      />
     
      {/* <FloatingAction
    actions={actions}
    
    onPressItem={name => {
      this.props.navigation.navigate('create');
      console.log(`selected button: ${name}`);
    }}
  /> */}
</SafeAreaView>
    );
}
}