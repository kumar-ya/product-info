import { Component, OnInit } from '@angular/core';
import {IProductInfo} from '../model/product-info.model';
import * as XLSX from 'xlsx'; 
import { ReadFileService } from '../service/readFile.service';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {

  constructor( private _readFileService: ReadFileService) { }

  
  productDetails: IProductInfo[] = [];

  ngOnInit(): void {

     
    
      // let productInfo1 = {id: "P1", name:"Apple",price: 55, image: "appleImage.jpg", category: "Fruits", description: "Healthy"}
      // this.productDetails.push(productInfo1);

      // let productInfo2 = {id: "P2", name:"Mango",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      // this.productDetails.push(productInfo2);

      // let productInfo3 = {id: "P3", name:"Mango2",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      // this.productDetails.push(productInfo3);

      // let productInfo4 = {id: "P3", name:"Mango4",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      // this.productDetails.push(productInfo4);
      console.log('calling service');
      //console.log(this.productDetails);
      this._readFileService.getProductData().subscribe(response=>{
        console.log('inside subscribe');

        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(response);

        reader.onload = (e: any) => {
        /* create workbook */
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

        /* selected the first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        const _sheetData = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
        
        this.productDetails = _sheetData;

        
        console.log('sheet Data ', _sheetData); // sheet data
        console.log('product details ', this.productDetails); // Data will be logged in array format containing 
        }


        // let _productData =  reader.result;
        // console.log(_productData);
       });
       console.log('EODF');
  }

}
