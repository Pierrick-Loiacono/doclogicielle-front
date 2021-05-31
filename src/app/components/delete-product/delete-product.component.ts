import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  products: Array<Product> = [];
  success: string = "";
  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(
      data => this.products = data,
      err => console.error(err)
    )
  }

  /**
   * Supprime un produit
   * @param id id du produit
   */
  delete(id: number){
    this.ps.deleteProduct(id).subscribe(
      data => {
        this.success = "Produit supprimé";
        window.location.reload();
      },
      err => console.error(err)
    )
  }
}
