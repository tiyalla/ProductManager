import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {

    // + is a short cut to convert string to numeric id
    let id = +this.route.snapshot.paramMap.get('id'); 

    //hardcoding because we're not retrieving via HTTP
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack() : void{
    this.router.navigate(['/products']);
  }
}
