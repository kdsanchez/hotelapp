import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


// servicio
import { ProductService } from '../../../services/product.service';

// produc class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetform();
  }
  onSubmit(productForm: NgForm)
  {
    if (productForm.value.$key == null)
      this.productService.insertProduct(productForm.value)
    else   

    this.productService.updateProduct(productForm.value);
    
    this.resetform(productForm);
  }
 resetform(productForm?: NgForm)
 {
  if(productForm != null)
  productForm.reset();
  this.productService.selectedProduct = new Product();
 }
}
