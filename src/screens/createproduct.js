import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text,View,TextInput,ActivityIndicator} from 'react-native';
import { t } from "react-native-tailwindcss";
import Api from "../services/api";
import { Picker } from "@react-native-picker/picker";
import EventEmitter from "react-native-eventemitter";

export default class Createproduct extends React.Component{
    componentDidMount(){
        Api.categories().then((res)=>this.setState({categories:res,loading:false}));
    }
    state={
        pname:'',description:"",categories:[],price:"",selectedcategory:null,image:"",loading:true,
    }

newproduct(){
    console.log(this.state.pname+" "+this.state.price+" "+this.state.selectedcategory+" "+this.state.description+" "+this.state.image+" ");
   this.setState({loading:true});
    // Api.createproduct("name","200","electronics","desc","","").then((res)=>console.log(res));
    Api.createproduct(this.state.pname,this.state.price,this.state.selectedcategory,this.state.description,this.state.image,"test@mail.com")
    .then((res)=>{
        if(res["createdAt"]!=null){
            EventEmitter.emit("foo",true);
            this.props.navigation.goBack();
        }
        console.log(res["createdAt"]);
        this.setState({loading:false});
    });
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
<SafeAreaView>
    <ScrollView>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={[t.text2xl,t.textBlack,t.fontBold,t.alignCenter,t.selfCenter,t.m10]}>Create Product</Text>
        <TextInput style={{backgroundColor:"white",marginVertical:5,borderRadius:10,height:50,alignSelf:"stretch",marginHorizontal:20,fontSize:15,color:"grey",padding:10}} placeholderTextColor="black" placeholder="Product Name" onChangeText={(txt)=>this.setState({pname:txt})}/>    
        <TextInput style={{backgroundColor:"white",marginVertical:5,borderRadius:10,height:150,alignSelf:"stretch",marginHorizontal:20,fontSize:15,color:"grey",padding:10,textAlignVertical:"top"}} placeholderTextColor="black" placeholder="Description" onChangeText={(txt)=>this.setState({description:txt})}/>    
        <TextInput style={{backgroundColor:"white",marginVertical:5,borderRadius:10,height:50,alignSelf:"stretch",marginHorizontal:20,fontSize:15,color:"grey",padding:10}} placeholderTextColor="black" placeholder="Image Url" onChangeText={(txt)=>this.setState({image:txt})}/>    
        <View style={{borderRadius:10,alignSelf:"stretch",backgroundColor:"white",marginVertical:5,marginHorizontal:20,}}>
        <Picker
        selectedValue={this.state.selectedcategory} 
        itemStyle={{color:"black",height:50,width:"100%",textAlign:"left"}}
        placeholder="Categories" dropdownIconColor={"grey"}
        mode="dropdown" 
        onValueChange={(itemValue, itemIndex) => this.setState({selectedcategory:itemValue})}
      >
        {this.state.categories.map((data)=>{
          return(
            <Picker.Item   label={data.name} value={data.name} />
          )
        })}
      
      </Picker>
      </View>
      <TextInput style={{backgroundColor:"white",marginVertical:5,borderRadius:10,height:50,alignSelf:"stretch",marginHorizontal:20,fontSize:15,color:"grey",padding:10}} placeholderTextColor="black" placeholder="Price" onChangeText={(txt)=>this.setState({price:txt})}/>    
<TouchableOpacity onPress={()=>this.newproduct()} containerStyle={{backgroundColor:"white",alignItems:"center",justifyContent:"center",marginVertical:20,borderRadius:10,height:50,alignSelf:"stretch",marginHorizontal:20,}}>
<Text style={{color:"grey",fontSize:18,fontWeight:"bold"}}>Submit</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
</SafeAreaView>
        );
    }
}