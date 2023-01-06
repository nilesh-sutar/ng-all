import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../common/interfaces/interfaces';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private dataService: DataService, private utilityService:UtilityService) {}

  cartSubject = new BehaviorSubject<Product[]>([]);
  wishlistSubject = new BehaviorSubject<Product[]>([]);
  productSubject = new BehaviorSubject<Product[]>([]);

  Products: Product[] = [];
  WishlistProducts: Product[] = [];

  getAllProducts() {
     this.dataService.getCall('/products').subscribe((result) => {
      this.productSubject.next(result.products);
    });
  }

  addProduct(_product: Product) {
    _product.isAddedToCart = true;
    this.Products.push(_product);
    this.cartSubject.next(this.Products);
    this.utilityService.openSnackbar(`<span class="material-icons me-3">check_circle</span>Added to Cart`,'item-center')
  }

  removeProduct(_product: Product) {
    this.Products.map((item: Product, index: number) => {
      if (item.id == _product.id) {
        _product.isAddedToCart = false;
        this.Products.splice(index, 1);
      }
    });
    this.cartSubject.next(this.Products);
    this.utilityService.openSnackbar(`<span class="material-icons me-3">check_circle</span>Removed from Cart`,'item-center')
  }

  removeAllProducts() {
    this.Products = [];
    this.Products.map((_product: Product) => (_product.isAddedToCart = false));
    this.cartSubject.next(this.Products);
  }

  addToWishlistProduct(_product: Product) {
    _product.isAddedToWishlist = true;
    this.WishlistProducts.push(_product);
    this.wishlistSubject.next(this.WishlistProducts);
    this.utilityService.openSnackbar(`<span class="material-icons me-3">check_circle</span>Added to Wishlist`,'item-center')
  }

  removeFromWishlistProduct(_product: Product) {
    this.WishlistProducts.map((item: Product, index: number) => {
      if (item.id == _product.id) {
        _product.isAddedToWishlist = false;
        this.WishlistProducts.splice(index, 1);
      }
    });
    this.wishlistSubject.next(this.WishlistProducts);
    this.utilityService.openSnackbar(`<span class="material-icons me-3">check_circle</span>Removed from Wishlist`,'item-center')
  }

  removeAllWishlistProducts() {
    this.WishlistProducts = [];
    this.WishlistProducts.map((_product: Product) => (_product.isAddedToWishlist = false));
    this.cartSubject.next(this.WishlistProducts);
  }
}
