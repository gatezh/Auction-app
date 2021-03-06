import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from "app/product.service";
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "products/:productId", component: ProductDetailComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
