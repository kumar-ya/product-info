import { Component, OnInit, OnDestroy } from '@angular/core';
import {IProductInfo} from '../model/product-info.model';
import * as XLSX from 'xlsx'; 
import { ReadFileService } from '../service/readFile.service';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  constructor( private _readFileService: ReadFileService) { }

  
  productDetails: IProductInfo[] = [];
  currentProductDetails: IProductInfo = {};
  showAllProduct = true;
  ngOnInit(): void { 
      console.log('calling service'); 
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
        this.showAllProduct = true;
        } 
       }); 
  }

  
  showProductDetails(_productData : IProductInfo)
  {
    this.currentProductDetails = _productData;
    this.showAllProduct = false;
  }

   // this method will load back the all product grid
  loadProductDetails():void{

    this.currentProductDetails = {};
    this.showAllProduct = true;
  }

  ngOnDestroy(){

    this.currentProductDetails = {};
    this.showAllProduct = true;
    this.productDetails = [];
  }

}
