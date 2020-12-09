import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ProductInfoComponent } from './components/product-info.component';

const routes: Routes = [ 
  { path: 'Home', component: AppComponent },
  // {path: 'product-info',component: ProductInfoComponent, pathMatch:"full"},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
