import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProduct } from 'src/model/MyProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<MyProduct>{
        return this.http.get('https://dummyjson.com/products')
  }
  viewProductDetail(productId:string){
    return this.http.get(`https://dummyjson.com/products/${productId}`)
  }

}

