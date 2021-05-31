import { Component, OnInit } from '@angular/core';
import { NewProvider } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  newProvider: NewProvider = {firmName: "", phone: "", address: ""};
  success: string = "";

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  createProvider() {
    this.ps.postProvider(this.newProvider).subscribe(
      data => this.success = "Fournisseur ajouté",
      err => console.error(err)
    )
  }
}
