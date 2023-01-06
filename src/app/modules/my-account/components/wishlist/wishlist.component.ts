import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/common/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  loaded: boolean = true;
  products: Product[] = [];
  constructor(
    public cartService: CartService,
    public utilityService: UtilityService
  ) {}
  ngOnInit() {
    this.cartService.wishlistSubject.subscribe(() => {
      this.products = this.cartService.WishlistProducts;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  displayedColumns: string[] = [
    'thumbnail',
    'title',
    'description',
    'price',
    'rating',
    'action',
  ];
  dataSource = new MatTableDataSource(this.products);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  takeAction(_product:Product){
    this.utilityService.openBottomSheet('Are you sure, would you like to remove this item?')
    .then(result => {
      if (result?.message == 'save') {
        this.cartService.removeFromWishlistProduct(_product)
      }
    })
  }

}
