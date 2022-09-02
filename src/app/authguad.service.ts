import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthguadService {
  Baseurl= "https://dummyjson.com/products"
  constructor(private http:HttpClient) { }
   myData(){
    return this.http.get(this.Baseurl);
   }
}