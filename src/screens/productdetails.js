import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Image,Text,ActivityIndicator} from "react-native";
import Api from "../services/api";
import EventEmitter from "react-native-eventemitter";

export default class Productdetails extends React.Component{
    state={
        data:null,loading:true,
    }
    componentDidMount(){
this.setState({
    data:this.props.route.params.data,
    loading:false
});
console.log(this.state.data);
}
deleteproduct(){
    this.setState({loading:true});
    Api.delete(this.state.data.id).then((res)=>{
        console.log(res);
            EventEmitter.emit('foo',true);
            this.props.navigation.goBack();
      
    })
}
    render(){  
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
<SafeAreaView style={{flex:1}}>
    <ScrollView>
        
        <View style={{flexDirection:"row",alignItems:'flex-start',padding:10,}}>
<View style={{height:220,width:190,justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:20}}>
<Image
              style={{height:190,width:170,resizeMode:"contain"}}
              source={{uri: this.state.data.avatar}}
            />
</View>
<View style={{margin:10,justifyContent:"space-between",alignSelf:"stretch"}}>
    <Text style={{fontSize:18,fontWeight:"bold",color:"black",flex:0.8,flexWrap:"wrap"}}  numberOfLines={3}>{this.state.data.name}</Text>
    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>${this.state.data.price}</Text>
</View>
        </View>
        <View style={{height:2,backgroundColor:"grey",marginHorizontal:10}}/>
        <View style={{paddingVertical:20,paddingHorizontal:10}}>
<Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>Description</Text>
<Text style={{fontSize:13,color:"#8a8a8a",fontWeight:"bold",marginTop:10}}>{this.state.data.description}</Text>
        </View>
    </ScrollView>
    <TouchableOpacity onPress={()=>this.deleteproduct()} containerStyle={{backgroundColor:"white",alignItems:"center",justifyContent:"center",marginVertical:20,borderRadius:10,height:50,alignSelf:"stretch",marginHorizontal:20,}}>
<Text style={{color:"grey",fontSize:18,fontWeight:"bold"}}>Delete</Text>
</TouchableOpacity>
</SafeAreaView>
        );
    }
}