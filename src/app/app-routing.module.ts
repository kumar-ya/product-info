import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ProductInfoComponent } from './components/product-info.component';
import {AboutUsComponent } from './components/aboutUs.component';
import {ContactUsComponent } from './components/contactUs.component';

const routes: Routes = [ 
  { path: 'Home', component: ProductInfoComponent },
  // {path: 'product-info',component: ProductInfoComponent, pathMatch:"full"},
  {path: 'AboutUs',  component: AboutUsComponent },
  {path: 'ContactUs',  component: ContactUsComponent },
  {path: 'ProductInfo', redirectTo: 'Home', pathMatch: 'full'},
  {path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
