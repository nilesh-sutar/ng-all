import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  Post,
  Quote,
  Comment,
} from 'src/app/common/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { forkJoin } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    public cartService: CartService,
    public utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.isDataLoaded = false;
    if (this.cartService.productSubject.value.length == 0)
      this.cartService.getAllProducts();
    this.cartService.productSubject.subscribe((result) => {
      this.isDataLoaded = true;
      this.products = result;
    });
    this.getData();
  }

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  comments: Comment[] = [];
  posts: Post[] = [];
  quotes: Quote[] = [];
  getData() {
    const comments = this.dataService.getCall('/comments');
    const posts = this.dataService.getCall('/posts');
    const quotes = this.dataService.getCall('/quotes');
    forkJoin([comments, posts, quotes]).subscribe((res) => {
      this.comments = res[0].comments
      this.posts = res[1].posts
      this.quotes = res[2].quotes
      console.log(res)
    });
  }

  products: Product[] = [];
  isDataLoaded: any = false;
  getProducts() {
    this.isDataLoaded = false;
    this.dataService.getCall('/products').subscribe(
      (result) => {
        this.products = [];
        this.products = result.products;
        this.isDataLoaded = true;
      },
      () => (this.isDataLoaded = null)
    );
  }
}
