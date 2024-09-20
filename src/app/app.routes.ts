import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './pages/deatail/deatail.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path:'register', component: RegisterComponent },
      // { path: '**', component: PageNotFoundComponent }, // 404 page not found

    ],
  },

  { path: 'login', component: LoginComponent },
  
];