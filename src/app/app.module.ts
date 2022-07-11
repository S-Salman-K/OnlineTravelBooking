import { FlightService } from './services/flight.service';
// import { ProductService } from './product.service';
import { CategoryService } from './category.service';
// import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CustomFormsModule } from 'ng2-validation';

// custom added
import { RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductFormComponent } from './admin/product-form/product-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { FlightService } from './flight.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { FlightComponent } from './travel/flight/flight.component';
import { HotelComponent } from './travel/hotel/hotel.component';
import { TrainComponent } from './travel/train/train.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//  

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { FlightSearchComponent } from './travel/flight/flight-search/flight-search.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { BookingComponent } from './travel/booking/booking.component';
// import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    // ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    // ProductFormComponent,
    FlightComponent,
    HotelComponent,
    TrainComponent,
    FlightSearchComponent,
    RegistrationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule,
    HttpClientModule,
    // for form validation 
    CustomFormsModule,
    // Angular Materials 
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    // NgbModule.forRoot(),
    RouterModule.forRoot([
      // routes for normal users
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'check-out', component:CheckOutComponent},
      {path:'order-success', component:OrderSuccessComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegistrationComponent},
      {path:'my/orders', component:MyOrdersComponent},

      // routes for admin
      {path:'admin/products/new', component:ProductFormComponent},
      {path:'admin/products/:id', component:ProductFormComponent},
      {path:'admin/products', component:AdminProductsComponent},
      {path:'admin/orders', component:AdminOrdersComponent},

      //route from home
      {path:'travel/flight', component:FlightComponent},
      {path:'travel/train', component:TrainComponent},
      {path:'travel/hotel', component:HotelComponent},
      {path:'booking/:flightId', component:BookingComponent},

      // 
      // {
      //   path: 'category',
      //   component: HomeComponent,
      //   children: [
      //     {
      //       path: 'flight',
      //       component: FlightComponent
    
      //     },
      //     {
      //       path: 'train',
      //       component: TrainComponent
      //     },
      //     {
      //       path: 'hotel',
      //       component: HotelComponent
      //     }

          // {
          //   path: 'profile',
          //   component: ProfileComponent
          // },
          // {
          //   path: 'add-product',
          //   component: ProductCreateComponent
          // },
          // {
          //   path: 'product-list',
          //   component: ProductListComponent
          // },
          // {
          //   path: 'view-product/:productId',
          //   component: ProductViewComponent
          // },
          // {
          //   path: 'view-reviews',
          //   component: ReviewsViewComponent
          // }
    
      //   ],
      // },

      // 
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    CategoryService,
    // ProductService
    // ProductService
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
