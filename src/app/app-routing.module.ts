import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IsLoggedInGuard } from './services/is-logged-in.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [IsLoggedInGuard]},
  {
    path: "products",
    canLoad: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
