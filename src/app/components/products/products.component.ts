import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private us: ProductService) {}

  ngOnInit(): void {
    console.log(this.getProducts());
    this.getProducts();
  }

  getProducts(): void {
    this.us.getProduct()
      .subscribe(products => this.products);
  }

}
