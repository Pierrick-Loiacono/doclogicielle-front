import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  providers: Array<Provider> = []

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProviders().subscribe(
      data => this.providers = data,
      err => console.error(err)
    );
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
    const provider = this.providers.find(p => p.id == id);

    if(provider) {
      this.ps.putProvider(provider).subscribe(
        data => window.location.reload(),
        err => console.log(err)
      );
    }
  }
}
