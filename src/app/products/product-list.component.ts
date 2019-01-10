import {Component, OnInit} from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
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
    products: IProduct[] = [];

   //Dependency Injection
    constructor(private productService: ProductService){
        
    }

    onRatingClicked(message: string): void{
        this.title = 'Product List '+ message;
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
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}