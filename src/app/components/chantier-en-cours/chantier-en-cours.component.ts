import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Construction, CONSTRUCTION_STEPS } from 'src/app/interfaces';
import { ConstructionService } from 'src/app/services/construction.service';

@Component({
  selector: 'app-chantier-en-cours',
  templateUrl: './chantier-en-cours.component.html',
  styleUrls: ['./chantier-en-cours.component.css']
})
export class ChantierEnCoursComponent implements OnInit {

  constructor(private cs: ConstructionService) { }

  steps: Array<{key:string, value: string}> = [];
  constructions: Array<Construction> = [];

  current_key: string = "WAITING";

  ngOnInit(): void {

    this.cs.getConstructions().subscribe(
      data => this.constructions = data,
      err => console.error(err)
    )

    for(const step in CONSTRUCTION_STEPS) {
      switch(step) {
        case "WAITING":
          this.steps.push({key: "WAITING", value: "En attente"})
          break;
        case "IN_PROGRESS":
          this.steps.push({key: "IN_PROGRESS", value: "En cours"})
          break;
        case "FINISHED":
          this.steps.push({key: "FINISHED", value: "Terminé"})
          break;
        case "LATE":
          this.steps.push({key: "LATE", value: "En retard"})
          break;
      }
    }
  }

  showDetails(id: number) {
    const element = document.getElementById(`detail-${id}`)

    if(!element) return

    if(element.style.display === "none")
      element.style.display = "block"
    else
      element.style.display = "none"
  }

  beautify(obj: Object) {
    const products = JSON.stringify(obj).split("Product")
    let data: Array<{quantity: string, designation: string}> = []
    let string = ""
    products.forEach(p => {
      if(p.indexOf("id=") !== -1) {
        let quantity = /:(\d+)/.exec(p) || [];
        let designation = /designation=([A-Z a-éèûzâà\']+)/.exec(p) || [];

        data.push({
          quantity: quantity.length > 0 ? quantity[1] : '0',
          designation: designation.length > 0 ? designation[1] : 'undefined',
        });
      }
    })
    data.forEach(p => string += `Produit: ${p.designation} | Quantité : ${p.quantity} <br />`)
    return string;
  }

}

@Pipe({
  name: 'ConstructionFilter',
  pure: false
})
export class ConstructionFilter implements PipeTransform {
  transform(items: any[], filter: Object): any {
      if (!items || !filter) {
          return items;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      return items.filter(item => item.state === filter.toString());
  }
}
