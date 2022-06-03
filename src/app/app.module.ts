import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-list/food-item/food-item.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { FoodOverlayComponent } from './food-list/food-overlay/food-overlay.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './cart-list/store/cart.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';
import { FoodReducer } from './food-list/store/food.reducer';
import { CustomerPageComponent } from './page/customer-page/customer-page.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { CheckoutItemComponent } from './checkout-list/checkout-item/checkout-item.component';
import { CheckoutColComponent } from './checkout-list/checkout-col/checkout-col.component';
import { CheckoutTotalComponent } from './checkout-total/checkout-total.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodItemComponent,
    FilterComponent,
    HeaderComponent,
    CartListComponent,
    CartItemComponent,
    FoodOverlayComponent,
    CheckoutPageComponent,
    CustomerPageComponent,
    CheckoutListComponent,
    CheckoutItemComponent,
    CheckoutColComponent,
    CheckoutTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ carts: CartReducer, foods: FoodReducer }),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
