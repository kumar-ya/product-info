import { Injectable } from  '@angular/core';
import {  HttpClient } from '@angular/common/http'

/** This service will read the physical file and return the observable to the calling method.
  
*/
@Injectable({
providedIn: 'root',

})
export class ReadFileService  {

    constructor(
        private _httpClient :HttpClient
    ){}


    getProductData(){
        console.log('inside service');
       return this._httpClient.get('assets/source/ProductData.xlsx', {responseType: "blob"});
    }
} 