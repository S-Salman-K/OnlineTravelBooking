import { ProductService } from './../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:any;
  product:any;
  id:any;

  constructor(
    private router: Router,
    // to read route parameters
    private route: ActivatedRoute,
    private categoriesService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoriesService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.productService.get(this.id).subscribe(p=>this.product=p);
    }
  }

  ngOnInit(): void {
    this.product={}
  }

  save(product:any){
    console.log(product);
    if(this.id)
      this.productService.update(this.id, product);
    else
      this.productService.create(product);
    this.goToProducts();
  }

  goToProducts() {
    this.router.navigate(['/admin/products']);
    // this.router.navigate(['items'], { relativeTo: this.route });
  }

  delete(){
    // code to delete product
    if(!confirm("Are you sure you want to delete this product?")) 
      return;
    this.productService.delete(this.id);
    this.goToProducts();
  }

}
