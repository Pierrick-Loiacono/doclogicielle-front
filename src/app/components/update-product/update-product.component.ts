import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product | undefined;

  designation_input: string = "";
  price_input: string = "";
  quantity_input: string = "";
  provider_input: string = "";
  error: string = "";

  constructor(private router: Router, private us: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.us.getProduct(1)
      .subscribe(product => this.product);
  }

  submitForm() {
  }

}
