import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {
  path:'',redirectTo:'productHome',pathMatch:'full'
 },
 {
  path:'productHome',component:ProductHomeComponent
 },
 {
  path:'productHome/allProduct',component:AllProductComponent
 },
 {
  path:'productHome/allProduct/viewProduct/:id',component:ViewProductComponent
 },
 {
  path:'**',component:PageNotFoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
