import { Component, OnInit } from '@angular/core';
import {IProductInfo} from '../model/product-info.model'

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
   
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  productDetails: IProductInfo[] = [];
  ngOnInit(): void {
    
      let productInfo1 = {id: "P1", name:"Apple",price: 55, image: "appleImage.jpg", category: "Fruits", description: "Healthy"}
      this.productDetails.push(productInfo1);

      let productInfo2 = {id: "P2", name:"Mango",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      this.productDetails.push(productInfo2);

      let productInfo3 = {id: "P3", name:"Mango2",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      this.productDetails.push(productInfo3);

      let productInfo4 = {id: "P3", name:"Mango4",price: 44, image: "mangoImage.jpg", category: "Fruits", description: "Healthy"}
      this.productDetails.push(productInfo4);
      
      console.log(this.productDetails);
  }

}
