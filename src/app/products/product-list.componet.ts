import { Component, OnDestroy, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponet implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  filteredProducts: Iproduct[] = [];
  products: Iproduct[] = [];

  private _listFilter: string = '';

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List : ' + message;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter :', value);
    this.filteredProducts = this.performfilter(value);
  }

  performfilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
}