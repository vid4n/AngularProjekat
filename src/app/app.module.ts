import { ShopService } from './services/shop.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PhoneService } from './services/phone.service';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducer';
import { phonesReducer } from './store/reducers/phones.reducer';
import { AppComponent } from './components/app.component';
import { ShopsComponent } from './components/shops/shops.component';
//import { MedicinesComponent } from './components/medicines/medicines.component';
//import { CartComponent } from './components/cart/cart.component';
//import { HomeComponent } from './components/home/home.component';
//import { DetailsComponent } from './components/details/details.component';
//import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ phones: phonesReducer, cart: cartReducer }),
  ],
  providers: [PhoneService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
