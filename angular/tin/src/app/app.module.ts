import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
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
import { AgmCoreModule } from '@agm/core';
import { OpenWeatherService } from './open-weather.service';
import { CategoryService } from './category.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MymodalLoginComponent } from './mymodal-login/mymodal-login.component';
import { MymodalRegisterComponent } from './mymodal-register/mymodal-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components';
import { AddCategoryComponent } from './add-category/add-category.component';


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
    ProductDetailsComponent,
    ProductFilterPipe,
    SignInComponent,
    SignUpComponent,
    MymodalLoginComponent,
    MymodalRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AddCategoryComponent
  ],
  entryComponents:[
    MymodalLoginComponent,
    MymodalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABnNV9_uIQyviYMAZDr4vkIAELi7a5lSs',
      libraries: ['places']
    })
  ],
  providers: [
    ProductService,
    OpenWeatherService,
    CategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
