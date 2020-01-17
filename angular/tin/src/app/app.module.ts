import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    ProductListComponent,
    AboutUsComponent,
    ContactComponent,
    routingComponents,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
