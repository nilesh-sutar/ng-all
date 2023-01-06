import { UtilityService } from 'src/app/services/utility.service';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id!: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public cartService: CartService,
    public utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.isDataLoaded = false;
    if (this.cartService.productSubject.value.length == 0) {
      this.cartService.getAllProducts();
    }
    this.cartService.productSubject.subscribe((result: any) => {
      this.product = result.find((item: any) => item.id == this.id);
      this.isDataLoaded = this.product ? true : null;
    });
  }

  changeImage(img: string) {
    this.product.thumbnail = img;
  }

  product!: Product;
  isDataLoaded: any;
  ratingArr = [0, 1, 2, 3, 4];

  showIcon(index: number, rating: number) {
    if (Math.round(rating) >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
