import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ChantierEnCoursComponent } from './components/chantier-en-cours/chantier-en-cours.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { DeleteProviderComponent } from './components/delete-provider/delete-provider.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { StockComponent } from './components/stock/stock.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UpdateProviderComponent } from './components/update-provider/update-provider.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "deleteProduct", component: DeleteProductComponent },
  { path: "updateProduct", component: UpdateProductComponent },
  { path: "addProvider", component: AddProviderComponent },
  { path: "updateProvider", component: UpdateProviderComponent },
  { path: "deleteProvider", component: DeleteProviderComponent },
  { path: "addUser", component: AddUserComponent },
  { path: "deleteUser", component: DeleteUserComponent },
  { path: "chantierEnCours", component: ChantierEnCoursComponent },
  { path: "statistiques", component: StatistiquesComponent },
  { path: "stock", component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
