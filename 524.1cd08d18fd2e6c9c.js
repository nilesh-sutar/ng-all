"use strict";(self.webpackChunkangular_test=self.webpackChunkangular_test||[]).push([[524],{3524:(I,d,c)=>{c.r(d),c.d(d,{HomeModule:()=>b});var _=c(7969),l=c(9808),g=c(4128),t=c(5e3),f=c(2468),x=c(910),h=c(5804),m=c(1461),s=c(9224),u=c(1083),v=c(7423),Z=c(3322),p=c(6688),T=c(8919),C=c(2624);function A(e,o){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"Loading products, please wait..!"),t.qZA(),t.BQk())}function H(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",19),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.oxw(2).cartService.removeFromWishlistProduct(r)}),t.TgZ(2,"span",20),t._uU(3," favorite "),t.qZA()(),t.BQk()}}function S(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.oxw(2).cartService.addToWishlistProduct(r)}),t.TgZ(1,"span",21),t._uU(2," favorite "),t.qZA()()}}function y(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",22),t._uU(2," Go to cart "),t.TgZ(3,"span",20),t._uU(4," call_missed_outgoing "),t.qZA()(),t.TgZ(5,"button",19),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.oxw(2).cartService.removeProduct(r)}),t._uU(6," Remove "),t.TgZ(7,"span",20),t._uU(8," remove_circle "),t.qZA()(),t.BQk()}}function U(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.oxw(2).cartService.addProduct(r)}),t.TgZ(1,"span",20),t._uU(2," add_shopping_cart "),t.qZA(),t._uU(3," Add to cart "),t.qZA()}}const J=function(e){return["/products/product-details",e]};function k(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",7)(1,"mat-card",8)(2,"mat-card-header")(3,"mat-card-title",9),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.YNc(7,H,4,0,"ng-container",10),t.YNc(8,S,3,0,"ng-template",null,11,t.W1O),t.qZA(),t.TgZ(10,"img",12),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw(2).utilityService.openCarouselDialog(a.images)}),t.qZA(),t.TgZ(11,"mat-card-content")(12,"div",13),t._uU(13),t.ALo(14,"currencyINR"),t.ALo(15,"numberRound"),t.TgZ(16,"span",14),t._uU(17),t.ALo(18,"currencyINR"),t.qZA(),t.TgZ(19,"span",15),t._uU(20),t.ALo(21,"numberRound"),t.qZA()(),t.TgZ(22,"p",16),t._uU(23),t.qZA()(),t.TgZ(24,"mat-card-actions",17),t.YNc(25,y,9,0,"ng-container",10),t.YNc(26,U,4,0,"ng-template",null,18,t.W1O),t.qZA()()()}if(2&e){const n=o.$implicit,i=t.MAs(9),r=t.MAs(27),a=t.oxw(2);t.xp6(3),t.Q6J("routerLink",t.VKq(22,J,n.id))("title",null==n?null:n.title),t.xp6(1),t.Oqu(null==n?null:n.title),t.xp6(2),t.Oqu(null==n?null:n.brand),t.xp6(1),t.Q6J("ngIf",n.isAddedToWishlist)("ngIfElse",i),t.xp6(3),t.Q6J("src",n.thumbnail,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(14,14,t.lcZ(15,16,n.price))," "),t.xp6(4),t.hij(" ",t.lcZ(18,18,a.utilityService.getActualPrice(n.price,n.discountPercentage))," "),t.xp6(3),t.hij(" ",t.lcZ(21,20,n.discountPercentage)+"% off"," "),t.xp6(3),t.hij(" ",n.description," "),t.xp6(1),t.Q6J("ngClass",n.isAddedToCart?"justify-content-between":"justify-content-end"),t.xp6(1),t.Q6J("ngIf",n.isAddedToCart)("ngIfElse",r)}}function q(e,o){if(1&e&&(t.TgZ(0,"mat-chip",27),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n)," ")}}function L(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",7)(1,"mat-card",23)(2,"mat-card-header")(3,"mat-card-title",24),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw(2).utilityService.openDialog(a,"post-gallery")}),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"p",16),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9," Tags : "),t.qZA(),t.TgZ(10,"mat-chip-list",25),t.YNc(11,q,3,3,"mat-chip",26),t.ALo(12,"slice"),t.qZA()()()()}if(2&e){const n=o.$implicit;t.xp6(4),t.Oqu(null==n?null:n.title),t.xp6(3),t.hij(" ",n.body," "),t.xp6(4),t.Q6J("ngForOf",t.Dn7(12,3,n.tags,0,2))}}function N(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"h2",3),t._uU(3," Products "),t.qZA(),t.TgZ(4,"ngx-slick-carousel",4,5),t.YNc(6,k,28,24,"div",6),t.qZA()(),t.TgZ(7,"div",2)(8,"h2",3),t._uU(9," Posts "),t.qZA(),t.TgZ(10,"ngx-slick-carousel",4,5),t.YNc(12,L,13,7,"div",6),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("config",n.slideConfig),t.xp6(2),t.Q6J("ngForOf",n.products),t.xp6(4),t.Q6J("config",n.slideConfig),t.xp6(2),t.Q6J("ngForOf",n.posts)}}function F(e,o){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No products found..!"),t.qZA(),t.BQk())}const Q=[{path:"",component:(()=>{class e{constructor(n,i,r){this.dataService=n,this.cartService=i,this.utilityService=r,this.slideConfig={slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:2e3,arrows:!0},this.comments=[],this.posts=[],this.quotes=[],this.products=[],this.isDataLoaded=!1}ngOnInit(){this.isDataLoaded=!1,0==this.cartService.productSubject.value.length&&this.cartService.getAllProducts(),this.cartService.productSubject.subscribe(n=>{this.isDataLoaded=!0,this.products=n}),this.getData()}getData(){const n=this.dataService.getCall("/comments"),i=this.dataService.getCall("/posts"),r=this.dataService.getCall("/quotes");(0,g.D)([n,i,r]).subscribe(a=>{this.comments=a[0].comments,this.posts=a[1].posts,this.quotes=a[2].quotes,console.log(a)})}getProducts(){this.isDataLoaded=!1,this.dataService.getCall("/products").subscribe(n=>{this.products=[],this.products=n.products,this.isDataLoaded=!0},()=>this.isDataLoaded=null)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.D),t.Y36(x.N),t.Y36(h.t))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:5,vars:3,consts:[[1,"row"],[4,"ngIf"],[1,"col-12"],[1,"content-title"],[1,"carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide"],[1,"example-card","p-card"],[1,"text-truncate","cursor-pointer",3,"routerLink","title"],[4,"ngIf","ngIfElse"],["notAddedToWishlist",""],["mat-card-image","","alt","Photo of a Shiba Inu",1,"cursor-pointer",3,"src","click"],[1,"p-price"],[1,"p-actual-price"],[1,"p-price-off"],[1,"text-truncate"],[1,"d-flex",3,"ngClass"],["notAdded",""],["mat-button","",3,"click"],[1,"material-icons"],[1,"material-icons","add-to-wishlist-symbol"],["mat-button","","routerLink","/cart"],[1,"example-card"],[1,"text-truncate","cursor-pointer",3,"click"],["aria-label","Fish selection"],["color","accent","selected","",4,"ngFor","ngForOf"],["color","accent","selected",""]],template:function(n,i){1&n&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,A,3,0,"ng-container",1),t.YNc(3,N,13,4,"ng-container",1),t.YNc(4,F,3,0,"ng-container",1),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",0==i.isDataLoaded),t.xp6(1),t.Q6J("ngIf",1==i.isDataLoaded),t.xp6(1),t.Q6J("ngIf",null==i.isDataLoaded))},directives:[l.O5,m.vE,l.sg,m.Xg,s.a8,s.dk,s.n5,u.rH,s.$j,v.lW,s.G2,s.dn,s.hq,l.mk,Z.oO,p.qn,p.HS],pipes:[T.j,C.s,l.OU,l.rS],styles:[""]}),e})()},{path:"",redirectTo:"home",pathMatch:"full"}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(Q)],u.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,M,_.m]]}),e})()}}]);