import { CartService } from 'src/app/services/cart.service';
import { AuthService } from './../../../modules/auth/services/auth.service';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationLinks } from './navigation-links';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService:CartService,
    private activatedRoute:ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.routerData = this.activatedRoute.snapshot.data
        console.log(this.routerData)
      }
    });
  }
  routerData:any;
  ngOnInit(): void {
    this.authService.loggedIn.subscribe(result => {
      let routeLinks = new NavigationLinks().routeLinks;
      this.routeLinks = routeLinks.filter(
        (item) => item.isLoggedIn == result
      );
    })
  }
  shakeIcon = false;
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // if (this.cartCount) {
    //   this.shakeIcon = true;
    //   setTimeout(() => {
    //   this.shakeIcon = false;
    //   }, 1000);
    // }
  }

  @Input() cartCount!:number;
  @Input() wishlistCount!:number;

  routeLinks: any = [];

  navigateTo(item: any) {
    if (item.name == 'Logout') {
      this.authService.logout();
      this.cartService.cartSubject.next([]);
      this.cartService.wishlistSubject.next([]);
      this.cartService.productSubject.next([]);
      this.cartService.Products.length = 0;
      this.cartService.WishlistProducts.length = 0;
      this.cartCount = 0;
      this.wishlistCount = 0;
      return;
    }
    if(item.link == '') return
    this.router.navigate([item.link]);
  }
}
