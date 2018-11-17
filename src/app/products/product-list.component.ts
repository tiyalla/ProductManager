import {Component, OnInit} from '@angular/core';
import { IProduct } from './products';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    title = 'Product List';
    imageHeight: 400;
    imageWidth: 400;
    showImage: boolean = false;
    _listFilter: string;
    filteredProducts: IProduct[];
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    products:IProduct[] = [{
        "productId": 2,
        "productName": "Garden cart",
        "productCode": "FGN-3941",
        "releaseDate": "March 18, 2015",
        "description": "15 gallon a month" ,
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/detail/6960/modern-chair-34-angle"

    },
    {
        "productId": 3,
        "productName": "Lamp chair",
        "productCode": "FGN-3941",
        "releaseDate": "March 18, 2015",
        "description": "15 gallon a month" ,
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/detail/6960/modern-chair-34-angle"

    }];
   
    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
    performFilter(filterBy:string) : IProduct[]{
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
   
    toggleImage(){
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        console.log('in oninit');
    }
}