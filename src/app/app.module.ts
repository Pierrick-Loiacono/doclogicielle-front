import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { UpdateProviderComponent } from './components/update-provider/update-provider.component';
import { DeleteProviderComponent } from './components/delete-provider/delete-provider.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ChantierEnCoursComponent, ConstructionFilter } from './components/chantier-en-cours/chantier-en-cours.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { StockComponent } from './components/stock/stock.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddProductComponent,
    DeleteProductComponent,
    AddProviderComponent,
    UpdateProviderComponent,
    DeleteProviderComponent,
    AddUserComponent,
    DeleteUserComponent,
    ChantierEnCoursComponent,
    StatistiquesComponent,
    StockComponent,
    UpdateProductComponent,
    ConstructionFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
