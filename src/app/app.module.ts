import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductInfoComponent } from './components/product-info.component';

@NgModule({
  declarations: [
    AppComponent,ProductInfoComponent
  ],  
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule, DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
