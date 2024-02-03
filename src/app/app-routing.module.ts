import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './SignIn/signin.component';
import { LoginComponent } from './Login/login.component';
import { WelcomepageComponent } from './WelcomePage/welcomepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ProductcategoryComponent } from './homepage/productcategory/productcategory.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './NotfoundPage/notfound.component';
import { ChangePasswordComponent } from './ForgotPassword/change-password.component';
import { CartpageComponent } from './CartPage/cartpage.component';
import { LogoutComponent } from './Logout/logout.component';
import { ProductsummaryComponent } from './Productsummary/productsummary.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },

  { path: 'signin', component: SigninComponent },
  { path: 'forgotpassword', component: ChangePasswordComponent},
  { path: 'login', component: LoginComponent },

  {path:"home",component:HomepageComponent,
  children:[
    {path:"",component:CategoriesComponent},
    {path:"profile",component:ProfileComponent},
    {path:"logout",component:LogoutComponent},

    { path: 'products/:category', component: ProductcategoryComponent },
    {path:'cart',component:CartpageComponent},
    {path:"cart/checkout",component:ProductsummaryComponent}   
  ]
  },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
