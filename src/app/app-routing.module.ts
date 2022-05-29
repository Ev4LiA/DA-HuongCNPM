import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';
import { CustomerPageComponent } from './page/customer-page/customer-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
