import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  pageTitle: string = 'Product Detail';
  product: Iproduct | undefined;
  errorMessage: string = '';
  sub!: Subscription;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { 

      const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`;

    }

  ngOnInit(): void {
    
    this.product =
    {

      "productId": 2,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };
  }


  // getProduct(id: number): void {
  //   this.productService.getProduct(id).subscribe({
  //     next: product => {
  //       this.product = product;
  //       this.pageTitle += ` : ${this.product?.productName}`;
  //     },
  //     error: err => console.log(err)
  //   });
  // }
  
  onBack(): void {
    this.router.navigate(['/products']);
  }


}
