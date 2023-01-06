import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    SharedModule
  ]
})
export class MyAccountModule { }
