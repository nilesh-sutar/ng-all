import { NavbarComponent } from 'src/app/common/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './common/modules/shared/shared.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AngularInterceptor } from './common/interceptor/angular-interceptor';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { CommonDialogComponent } from './common/ḍialogs/common-dialog/common-dialog.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ConfirmDialogComponent } from './common/ḍialogs/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommonDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxUiLoaderModule,
    GalleryModule,
    LightboxModule,
    SlickCarouselModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AngularInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
