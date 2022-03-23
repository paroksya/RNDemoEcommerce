import React from "react";
import {Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/dashboard";
import { TouchableOpacity } from "react-native-gesture-handler";
import Createproduct from "../screens/createproduct";
import Productdetails from "../screens/productdetails";

const Stack = createStackNavigator();

function routes() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        {/* <Stack.Screen name="splash" options={{headerShown:false}} component={splash}/> */}
        <Stack.Screen name="dashboard"  options={{ 
            headerLeftLabelVisible:false,
            headerTitle: (props) => (
            <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>UPayments Store</Text>
        ),
        headerTitleAlign:"left",
        headerStyle:{backgroundColor:"white"},
        headerRight:(props)=>(
            <TouchableOpacity style={{marginRight:10}}>
                <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>Register</Text>
            </TouchableOpacity>
        )
        
        }} component={Dashboard}/>
        <Stack.Screen name="create"  options={{ headerTitle: (props) => (
            <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>UPayments Store</Text>
        ),
        headerTitleAlign:"left",
        headerLeftLabelVisible:false,

        headerStyle:{backgroundColor:"white"},
        headerRight:(props)=>(
            <TouchableOpacity style={{marginRight:10}}>
                <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>Register</Text>
            </TouchableOpacity>
        )
        
        }} component={Createproduct}/>
        <Stack.Screen name="details"  options={{ headerTitle: (props) => (
            <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>UPayments Store</Text>
        ),
        headerTitleAlign:"left",
        headerLeftLabelVisible:false,

        headerStyle:{backgroundColor:"white"},
        headerRight:(props)=>(
            <TouchableOpacity style={{marginRight:10}}>
                <Text style={{fontSize:15,fontWeight:"700",color:"black"}}>Register</Text>
            </TouchableOpacity>
        )
        
        }} component={Productdetails}/>
        {/* <Stack.Screen name="login" options={{headerShown:false}} component={login}/>
        <Stack.Screen name="compare" options={{headerShown:false}} component={compare} */}
 
         
        </Stack.Navigator>
        </NavigationContainer>
    );
}
export default routes;