import { Injectable } from  '@angular/core';
import {  HttpClient } from '@angular/common/http'
 
@Injectable({
providedIn: 'root',

})
export class ReadFileService  {

    constructor(
        private _httpClient :HttpClient
    ){}


    getProductData(){
        console.log('inside service');
       return this._httpClient.get('../assets/source/ProductData.xlsx', {responseType: "blob"});
    }
} 