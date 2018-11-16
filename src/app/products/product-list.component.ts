import {Component} from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    title = 'Product List';
    products: any [] = [{
        "productId": 2,
        "productName": "Garden cart",
        "productCode": "FGN-3941",
        "releaseDate": "March 18, 2015",
        "description": "15 gallon a month" ,
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "www.yahoo.com"

    },
    {
        "productId": 3,
        "productName": "Lamp chair",
        "productCode": "FGN-3941",
        "releaseDate": "March 18, 2015",
        "description": "15 gallon a month" ,
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "www.yahoo.com"

    }];
}