import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = ['Flight', 'Train', 'Hotel', 'Bus', 'Ferries']
  constructor() { }

  getCategories(){
    return this.categories;
  }

}
