import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  designation_input: string = "";
  price_input: string = "";
  quantity_input: string = "";
  provider_input: string = "";
  error: string = "";

  constructor(private router: Router, private us: ProductService) { }

  ngOnInit(): void {
  }

  submitForm() {}

  }
