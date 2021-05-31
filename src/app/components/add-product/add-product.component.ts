import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Provider } from 'src/app/interfaces';
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
  provider_id: string = "";
  success: string = "";
  providers : Array<Provider> = [];

  constructor(private router: Router, private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProviders().subscribe(
      data => this.providers = data,
      err => console.error(err)
    )
  }

  submitForm() {
    this.ps.postProduct({
      designation: this.designation_input,
      price: this.price_input,
      quantity: this.quantity_input,
      provider: this.provider_id
    }).subscribe(
      data => {
        this.success = "Produit ajouté";
        this.router.navigate(["/deleteProduct"])
      },
      err => console.error(err)
    )
  }
}
