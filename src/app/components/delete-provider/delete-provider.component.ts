import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-provider',
  templateUrl: './delete-provider.component.html',
  styleUrls: ['./delete-provider.component.css']
})
export class DeleteProviderComponent implements OnInit {

  providers: Array<Provider> = [];
  success: string = "";

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getProviders().subscribe(
      data => this.providers = data,
      err => console.error(err)
    )
  }

  /**
   * Supprime un fournisseur
   * @param id id du fournisseur
   */
  delete(id: number) {
    this.ps.deleteProvider(id).subscribe(
      data => {
        this.success = "Fournisseur supprimé";
        window.location.reload();
      },
      err => console.error(err)
    )
  }

}
