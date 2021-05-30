import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product | undefined;

  constructor(private router: Router, private us: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.us.getProduct(1)
      .subscribe(product => this.product);
  }

}
