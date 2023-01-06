import { UtilityService } from 'src/app/services/utility.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public cartService: CartService,
    private router:Router,
    public utilityService:UtilityService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];
  isDataLoaded: any = false;
  getProducts() {
    this.isDataLoaded = false;
    if (this.cartService.productSubject.value.length == 0) this.cartService.getAllProducts();
    this.cartService.productSubject.subscribe((result) => {
      this.isDataLoaded = true;
      this.products = result;
    });
  }

  goToProductDetails(id:number) {
    this.router.navigate(['/products/product-details', id]);
  }
}
