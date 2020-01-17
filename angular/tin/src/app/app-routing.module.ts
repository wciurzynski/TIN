import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent,
  },
  {
    path: 'main-page', component: MainPageComponent,
  },
  {
    path: 'product-list', component: ProductListComponent,
  },
  {
    path: 'about-us', component: AboutUsComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'product-details', component: ProductDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainPageComponent,
  ProductListComponent,
  AboutUsComponent,
  ContactComponent,
  ProductDetailsComponent
]