"use strict";(self.webpackChunkangular_test=self.webpackChunkangular_test||[]).push([[490],{1490:(B,d,r)=>{r.r(d),r.d(d,{ProductsModule:()=>H});var u=r(9808),t=r(5e3),_=r(1083),h=r(2468),l=r(910),p=r(5804),a=r(9224),g=r(7423),m=r(6688),T=r(5245),f=r(8919),x=r(2624);function A(o,i){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"Loading products, please wait..!"),t.qZA(),t.BQk())}function P(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"img",23),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).changeImage(s)}),t.qZA(),t.BQk()}if(2&o){const n=i.$implicit,e=t.oxw(2);t.xp6(1),t.ekj("active",e.product.thumbnail==n),t.Q6J("src",n,t.LSH)}}function v(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",24),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return c.cartService.removeFromWishlistProduct(c.product)}),t.TgZ(2,"span",25),t._uU(3," favorite "),t.qZA()(),t.BQk()}}function C(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return c.cartService.addToWishlistProduct(c.product)}),t.TgZ(1,"span",26),t._uU(2," favorite "),t.qZA()()}}function b(o,i){if(1&o&&(t.TgZ(0,"span")(1,"mat-icon"),t._uU(2),t.qZA()()),2&o){const n=i.index,e=t.oxw(2);t.xp6(2),t.hij(" ",e.showIcon(n,e.product.rating)," ")}}function y(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",27),t._uU(2," Go to cart "),t.TgZ(3,"span",25),t._uU(4," call_missed_outgoing "),t.qZA()(),t.TgZ(5,"button",24),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return c.cartService.removeProduct(c.product)}),t._uU(6," Remove "),t.TgZ(7,"span",25),t._uU(8," remove_circle "),t.qZA()(),t.BQk()}}function k(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",28)(1,"span",25),t._uU(2," arrow_back_ios "),t.qZA(),t._uU(3," Back to products "),t.qZA(),t.TgZ(4,"button",24),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return c.cartService.addProduct(c.product)}),t.TgZ(5,"span",25),t._uU(6," add_shopping_cart "),t.qZA(),t._uU(7," Add to cart "),t.qZA()}}function N(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"mat-card",3)(3,"div",0)(4,"div",4)(5,"img",5),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return c.utilityService.openCarouselDialog(c.product.images)}),t.qZA(),t.TgZ(6,"div",6),t.YNc(7,P,2,3,"ng-container",7),t.qZA()(),t.TgZ(8,"div",8)(9,"mat-card-header",9)(10,"mat-card-title",10),t._uU(11),t.qZA(),t.TgZ(12,"mat-card-subtitle"),t._uU(13),t.qZA(),t.YNc(14,v,4,0,"ng-container",11),t.YNc(15,C,3,0,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(17,"mat-card-content")(18,"p",13)(19,"mat-chip-list",14)(20,"mat-chip"),t._uU(21),t.qZA()()(),t.TgZ(22,"div",15),t._uU(23),t.ALo(24,"currencyINR"),t.ALo(25,"numberRound"),t.TgZ(26,"span",16),t._uU(27),t.ALo(28,"currencyINR"),t.qZA(),t.TgZ(29,"span",17),t._uU(30),t.ALo(31,"numberRound"),t.qZA()(),t.TgZ(32,"p",18),t._uU(33),t.qZA(),t.TgZ(34,"p",19)(35,"span",20),t._uU(36," Rating : "),t.qZA(),t.YNc(37,b,3,1,"span",7),t.qZA()(),t.TgZ(38,"mat-card-actions",21),t.YNc(39,y,9,0,"ng-container",11),t.YNc(40,k,8,0,"ng-template",null,22,t.W1O),t.qZA()()()()(),t.BQk()}if(2&o){const n=t.MAs(16),e=t.MAs(41),c=t.oxw();t.xp6(5),t.Q6J("src",c.product.thumbnail,t.LSH),t.xp6(2),t.Q6J("ngForOf",c.product.images),t.xp6(3),t.Q6J("title",c.product.title),t.xp6(1),t.hij(" ",c.product.title," "),t.xp6(2),t.Oqu(c.product.brand),t.xp6(1),t.Q6J("ngIf",c.product.isAddedToWishlist)("ngIfElse",n),t.xp6(7),t.Oqu(c.product.category),t.xp6(2),t.hij(" ",t.lcZ(24,15,t.lcZ(25,17,c.product.price))," "),t.xp6(4),t.hij(" ",t.lcZ(28,19,c.utilityService.getActualPrice(c.product.price,c.product.discountPercentage))," "),t.xp6(3),t.hij(" ",t.lcZ(31,21,c.product.discountPercentage)+"% off"," "),t.xp6(3),t.hij(" ",c.product.description," "),t.xp6(4),t.Q6J("ngForOf",c.ratingArr),t.xp6(2),t.Q6J("ngIf",c.product.isAddedToCart)("ngIfElse",e)}}function U(o,i){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No data found..!"),t.qZA(),t.BQk())}let S=(()=>{class o{constructor(n,e,c,s){this.route=n,this.dataService=e,this.cartService=c,this.utilityService=s,this.ratingArr=[0,1,2,3,4]}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id")||"",this.isDataLoaded=!1,0==this.cartService.productSubject.value.length&&this.cartService.getAllProducts(),this.cartService.productSubject.subscribe(n=>{this.product=n.find(e=>e.id==this.id),this.isDataLoaded=!!this.product||null})}changeImage(n){this.product.thumbnail=n}showIcon(n,e){return Math.round(e)>=n+1?"star":"star_border"}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.gz),t.Y36(h.D),t.Y36(l.N),t.Y36(p.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:5,vars:3,consts:[[1,"row"],[4,"ngIf"],[1,"col-md-12"],[1,"example-card","p-card"],[1,"col-md-4"],["mat-card-image","","alt","Photo of a Shiba Inu",1,"p-3","cursor-pointer",3,"src","click"],[1,"thumbnail-row"],[4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"p-header"],[3,"title"],[4,"ngIf","ngIfElse"],["notAddedToWishlist",""],[1,"p-3"],["aria-label","Fish selection"],[1,"p-price"],[1,"p-actual-price"],[1,"p-price-off"],[1,"p-desc"],[1,"p-rating"],[1,"pe-3"],[1,"d-flex","justify-content-between"],["notAdded",""],["alt","Photo of a Shiba Inu",1,"p-3","cursor-pointer",3,"src","click"],["mat-button","",3,"click"],[1,"material-icons"],[1,"material-icons","add-to-wishlist-symbol"],["mat-button","","routerLink","/cart"],["mat-button","","routerLink","/products"]],template:function(n,e){1&n&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,A,3,0,"ng-container",1),t.YNc(3,N,42,23,"ng-container",1),t.YNc(4,U,3,0,"ng-container",1),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",0==e.isDataLoaded),t.xp6(1),t.Q6J("ngIf",1==e.isDataLoaded),t.xp6(1),t.Q6J("ngIf",null==e.isDataLoaded))},directives:[u.O5,a.a8,a.G2,u.sg,a.dk,a.n5,a.$j,g.lW,a.dn,m.qn,m.HS,T.Hw,a.hq,_.rH],pipes:[f.j,x.s],styles:[".thumbnail-row[_ngcontent-%COMP%]{display:flex}.thumbnail-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px}.thumbnail-row[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%]{border:2px solid #3f51b5}"]}),o})();var D=r(3322);function q(o,i){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"Loading products, please wait..!"),t.qZA(),t.BQk())}function I(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit;return t.oxw(2).cartService.removeFromWishlistProduct(c)}),t.TgZ(2,"span",18),t._uU(3," favorite "),t.qZA()(),t.BQk()}}function J(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit;return t.oxw(2).cartService.addToWishlistProduct(c)}),t.TgZ(1,"span",19),t._uU(2," favorite "),t.qZA()()}}function Q(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",20),t._uU(2," Go to cart "),t.TgZ(3,"span",18),t._uU(4," call_missed_outgoing "),t.qZA()(),t.TgZ(5,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit;return t.oxw(2).cartService.removeProduct(c)}),t._uU(6," Remove "),t.TgZ(7,"span",18),t._uU(8," remove_circle "),t.qZA()(),t.BQk()}}function M(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit;return t.oxw(2).cartService.addProduct(c)}),t.TgZ(1,"span",18),t._uU(2," add_shopping_cart "),t.qZA(),t._uU(3," Add to cart "),t.qZA()}}function w(o,i){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",3)(2,"mat-card",4)(3,"mat-card-header",5)(4,"mat-card-title",6)(5,"a",7),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).goToProductDetails(s.id)}),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.qZA(),t.YNc(9,I,4,0,"ng-container",8),t.YNc(10,J,3,0,"ng-template",null,9,t.W1O),t.qZA(),t.TgZ(12,"img",10),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).utilityService.openCarouselDialog(s.images)}),t.qZA(),t.TgZ(13,"mat-card-content")(14,"div",11),t._uU(15),t.ALo(16,"currencyINR"),t.ALo(17,"numberRound"),t.TgZ(18,"span",12),t._uU(19),t.ALo(20,"currencyINR"),t.qZA(),t.TgZ(21,"span",13),t._uU(22),t.ALo(23,"numberRound"),t.qZA()(),t.TgZ(24,"p",14),t._uU(25),t.qZA()(),t.TgZ(26,"mat-card-actions",15),t.YNc(27,Q,9,0,"ng-container",8),t.YNc(28,M,4,0,"ng-template",null,16,t.W1O),t.qZA()()(),t.BQk()}if(2&o){const n=i.$implicit,e=t.MAs(11),c=t.MAs(29),s=t.oxw(2);t.xp6(4),t.Q6J("title",null==n?null:n.title),t.xp6(2),t.hij(" ",null==n?null:n.title," "),t.xp6(2),t.Oqu(null==n?null:n.brand),t.xp6(1),t.Q6J("ngIf",n.isAddedToWishlist)("ngIfElse",e),t.xp6(3),t.Q6J("src",n.thumbnail,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(16,13,t.lcZ(17,15,n.price))," "),t.xp6(4),t.hij(" ",t.lcZ(20,17,s.utilityService.getActualPrice(n.price,n.discountPercentage))," "),t.xp6(3),t.hij(" ",t.lcZ(23,19,n.discountPercentage)+"% off"," "),t.xp6(3),t.hij(" ",n.description," "),t.xp6(1),t.Q6J("ngClass",n.isAddedToCart?"justify-content-between":"justify-content-end"),t.xp6(1),t.Q6J("ngIf",n.isAddedToCart)("ngIfElse",c)}}function L(o,i){if(1&o&&(t.ynx(0),t.YNc(1,w,30,21,"ng-container",2),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.products)}}function F(o,i){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No products found..!"),t.qZA(),t.BQk())}const j=[{path:"",component:(()=>{class o{constructor(n,e,c){this.cartService=n,this.router=e,this.utilityService=c,this.products=[],this.isDataLoaded=!1}ngOnInit(){this.getProducts()}getProducts(){this.isDataLoaded=!1,0==this.cartService.productSubject.value.length&&this.cartService.getAllProducts(),this.cartService.productSubject.subscribe(n=>{this.isDataLoaded=!0,this.products=n})}goToProductDetails(n){this.router.navigate(["/products/product-details",n])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l.N),t.Y36(_.F0),t.Y36(p.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:5,vars:3,consts:[[1,"row"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"example-card","p-card"],[1,"p-header"],[1,"text-truncate",3,"title"],[3,"click"],[4,"ngIf","ngIfElse"],["notAddedToWishlist",""],["mat-card-image","","alt","Photo of a Shiba Inu",1,"cursor-pointer",3,"src","click"],[1,"p-price"],[1,"p-actual-price"],[1,"p-price-off"],[1,"text-truncate"],[1,"d-flex",3,"ngClass"],["notAdded",""],["mat-button","",3,"click"],[1,"material-icons"],[1,"material-icons","add-to-wishlist-symbol"],["mat-button","","routerLink","/cart"]],template:function(n,e){1&n&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,q,3,0,"ng-container",1),t.YNc(3,L,2,1,"ng-container",1),t.YNc(4,F,3,0,"ng-container",1),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",0==e.isDataLoaded),t.xp6(1),t.Q6J("ngIf",1==e.isDataLoaded),t.xp6(1),t.Q6J("ngIf",null==e.isDataLoaded))},directives:[u.O5,u.sg,a.a8,a.dk,a.n5,a.$j,g.lW,a.G2,a.dn,a.hq,u.mk,D.oO,_.rH],pipes:[f.j,x.s],styles:[""]}),o})()},{path:"product-details/:id",component:S}];let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[_.Bz.forChild(j)],_.Bz]}),o})();var O=r(7969);let H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,Y,O.m]]}),o})()}}]);