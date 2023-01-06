import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/common/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  loaded: boolean = true;
  products: Product[] = [];
  constructor(
    public cartService: CartService,
    public utilityService: UtilityService
  ) {}
  ngOnInit() {
    this.cartService.cartSubject.subscribe(() => {
      this.products = this.cartService.Products;
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
        this.cartService.removeProduct(_product)
      }
    })
  }
}
