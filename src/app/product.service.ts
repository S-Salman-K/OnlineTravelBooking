import { Product } from './entity/product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL: string = '/assets/data/';
  private url:string = '/assets/data/indigo.json';

  constructor(private http: HttpClient) { }

  create(category:any){
    // add category in Database;
  }
  
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL+"allProducts.json");
  }

  get(productId:any){
    // this is of type Observable so we have to convert this in the caller method to _____ ?
    return this.http.get(this.url);
  }

  update(productId:any, product:any){
    // write here code to call database and 
    // update the product whose id == productId with 
    // and data is in product 

    // (optional): you can also return the promise from here back to the caller 
  }

  delete(productId:any){
    // delete product with id == productId
  }
}

