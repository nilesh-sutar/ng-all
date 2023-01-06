import { CartService } from 'src/app/services/cart.service';
import { NavigationEnd, Router } from '@angular/router';
import {  Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';
  cartCount = 0;
  wishlistCount = 0;
  constructor(private cartService: CartService, router: Router) {
    this.cartService.cartSubject.subscribe(
      () => (this.cartCount = this.cartService.Products.length)
    );
    this.cartService.wishlistSubject.subscribe(
      () => (this.wishlistCount = this.cartService.WishlistProducts.length)
    );
    router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;
      // Scroll to the top of the page
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}
