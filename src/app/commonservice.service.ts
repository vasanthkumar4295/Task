import { Injectable } from '@angular/core';
import { Base_URL } from './Utils/constant';
import{HttpClient}from '@angular/common/http';


import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  
  constructor(private http:HttpClient) { }

    myData(){
      return this.http.get(Base_URL)
      
    }
    updateData(data:any){
      console.log(data)
      const body ={
        method:'put',
        body:JSON.stringify({
          id:data.id,
          title:data.title,
          body:data.title,
          userId:data.id,

        }),
        headers:{
          'content-type':'application/json; charset-UTF-8',
          
        },
        
      }     
      return this.http.put(`${Base_URL}/${data.id}`,body)
    }
    deletemodel(data:any){
      
      console.log('delete the data',data);
      return this.http.delete(`${Base_URL}/${data}`);
     }
    
  }
 