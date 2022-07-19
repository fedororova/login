import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './start-page/main.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';
import { YakutskSiteComponent } from './yakutsk-site/yakutsk-site.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddListUserComponent } from './add-list-user/add-list-user.component';
import { EditListUserComponent } from './edit-list-user/edit-list-user.component';
import { YakutskPageComponent } from './yakutsk-edit-page/yakutsk-page.component';

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'City', component: YakutskSiteComponent },
  { path: 'Me', component: AboutmePageComponent },
  { path: 'Edit', component: YakutskPageComponent },
  { path: 'List', component: ListUserComponent },
  { path: 'List/AddList', component: AddListUserComponent },
  { path: 'EditList/:id', component: EditListUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
