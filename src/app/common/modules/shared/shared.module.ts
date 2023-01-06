import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { INRCurrencyPipe } from '../../pipes/currency-inr.pipe';
import { NumberRoundPipe } from '../../pipes/common.pipe';



@NgModule({
  declarations: [INRCurrencyPipe,NumberRoundPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    LightboxModule,
    SlickCarouselModule,
    INRCurrencyPipe,
    NumberRoundPipe
  ]
})
export class SharedModule { }
