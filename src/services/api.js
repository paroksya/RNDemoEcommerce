
import  { Component } from "react";
class api extends Component {

//---------------------------- DASHBOARD ---------------------------------



               async delete(id){
   
                var requestOptions = {
                    method: 'DELETE',
                    redirect: 'follow'
                  };
                  
             
               
                       const respo= await fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"+id, requestOptions);
                       const data= await respo.json();
                   
                      return data;
                 
                   
                   }


                   async products(){
   
                    var myHeaders = new Headers();
                    myHeaders.append("Cookie", "__cfduid=d11825dcf3a50a2b566c95c3585e49af51602137826");
                    
            
                    var link ="https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";
                     
                           var requestOptions = {
                               method: 'GET',
                               headers: myHeaders,
                               redirect: 'follow'
                              
                           };
                   
                           const respo= await  fetch(link, requestOptions);
                           const data= await respo.json();
                       
                          return data;
                     
                       
                       }
                       async categories(){
   
                        var myHeaders = new Headers();
                        myHeaders.append("Cookie", "__cfduid=d11825dcf3a50a2b566c95c3585e49af51602137826");
                        
                
                        var link ="https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/";
                         
                               var requestOptions = {
                                   method: 'GET',
                                   headers: myHeaders,
                                   redirect: 'follow'
                                  
                               };
                       
                               const respo= await  fetch(link, requestOptions);
                               const data= await respo.json();
                           
                              return data;
                         
                           
                           }
                           async createproduct(name,price,category,description,avatar,email){
                            console.log(name);
     console.log(price);
     console.log(category);
     console.log(description);
     console.log(avatar);

                            var myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");
                            
                            var raw = JSON.stringify({
                              name: name,
                              price: price,
                              category: category,
                              description: description,
                              avatar: avatar,
                              DeveloperEmail: email
                            });
                            
                            var requestOptions = {
                              method: 'POST',
                              headers: myHeaders,
                              body: raw,
                              redirect: 'follow'
                            };
                        
                           
                                   const respo= await   fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", requestOptions);
                                   const data= await respo.json();
                               
                                  return data;
                             
                               
                               }
                       async dashboard(){
     
                
                        var myHeaders = new Headers();
                        myHeaders.append("Cookie", "__cfduid=d11825dcf3a50a2b566c95c3585e49af51602137826");
                        
                
                        var link ="https://newproject.similarstock.com/api/StockInformation/GetDashboard?V1=1";
                         
                               var requestOptions = {
                                   method: 'GET',
                                   headers: myHeaders,
                                   redirect: 'follow'
                                  
                               };
                       
                               const respo= await  fetch(link, requestOptions);
                               const data= await respo.json();
                           
                              return data;
                         
                           
                           }

        }
const Api= new api();
export default Api;
