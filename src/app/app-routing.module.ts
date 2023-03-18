import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
const routes: Routes = [
  { path: 'login', component:LoginPageComponent},
  { path: '', component:LoginPageComponent},
  { path: 'register', component:RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
