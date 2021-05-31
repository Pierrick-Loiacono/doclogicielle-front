import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products: Array<Product> = []
  usertype: string = ""

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(
      data => this.products = data,
      err => console.error(err)
    );
    this.usertype = localStorage.getItem("usertype") || ""
  }

  /**
   * Affiche le formulaire avec l'id passé en parametre
   * @param id l'id à afficher
   */
  showModifyForm(id: number) {
    const element = document.getElementById(`form-${id}`)

    if(!element) return

    if(element.style.display === "none")
      element.style.display = "block"
    else
      element.style.display = "none"
  }

  /**
   * Modifie un produit
   * @param id l'id du produit
   */
  submitForm(id: number) {
    const product = this.products.find(p => p.id == id);

    if(product) {
      this.ps.putProduct(product).subscribe(
        data=> console.log(data),
        err => console.log(err)
      );
    }
  }
}
